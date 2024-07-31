import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardComponent } from '../../dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { ProductService } from '../../../core/services/product.service';
import { Image } from '../../../shared/class/image';
import { faPlus, faSave, faXmark } from '@fortawesome/free-solid-svg-icons';
import { MeasurementUnit } from '../../../core/models/measurement-unit';
import { Brand } from '../../../core/models/brand';
import { InventoryService } from '../../../core/services/inventory.service';

@Component({
  selector: 'app-add-product-page',
  standalone: true,
  imports: [
    DashboardComponent,
    FontAwesomeModule, 
    ReactiveFormsModule, 
    NgxDropzoneModule,
    ModalComponent
  ],
  templateUrl: './add-product-page.component.html',
  styleUrl: './add-product-page.component.scss'
})
export class AddProductPageComponent implements OnInit {

  iconDelete = faXmark;
  iconPlus = faPlus;
  iconSave = faSave;
  idProduct: number;

  productForm: FormGroup = new FormGroup({
    code: new FormControl(null,[Validators.required]),
    name: new FormControl(null,[Validators.required]),
    description: new FormControl(null,null),
    retailPrice: new FormControl(null,[Validators.required]),
    wholesalePrice: new FormControl(null,[Validators.required]),
    previousPrice: new FormControl(0,null),
    discount: new FormControl(null,null),
    discountType: new FormControl('',null),
    minAmount: new FormControl(0,[Validators.required]),
    purchasePrice: new FormControl(null,[Validators.required]),
    delivery: new FormControl(false,null),
    deliveryPrice: new FormControl({value: null, disabled: true},null),
    formula: new FormControl(false,null),
    brandId: new FormControl('',[Validators.required]),
    measurementUnitId: new FormControl('',[Validators.required]),
    amount: new FormControl(0, null),
  });

  @ViewChild('modalMsg') modalMsg!: ModalComponent;
  isFormSubmitted: boolean = false;
  listDim: Array<MeasurementUnit> = [];
  listBrand: Array<Brand> = [];
  msg: string = '';

  constructor(private productService: ProductService, private inventoryService: InventoryService, public imageFile: Image) {}

  ngOnInit(): void {
      this.getAllDataForm();
  }

  getAllDataForm(){
    this.inventoryService.getAllBrands().subscribe({
      next: (res) => {
        this.listBrand = res;
      }
    })
    this.inventoryService.getAllMeasurementUnit().subscribe({
      next: (res) => {
        this.listDim = res;
      }
    })
  }

  submitProduct() {
    this.isFormSubmitted = true;
    
    if (this.productForm.invalid) {
      return;
    }

    const formFile = new FormData();
    this.imageFile.files.forEach( file => {
      formFile.append('images',file);
    });
    formFile.append('code', this.productForm.get('code')?.value);
    formFile.append('name', this.productForm.get('name')?.value);
    formFile.append('description', this.productForm.get('description')?.value);
    formFile.append('retailPrice', this.productForm.get('retailPrice')?.value);
    formFile.append('wholesalePrice', this.productForm.get('wholesalePrice')?.value);
    formFile.append('previousPrice', this.productForm.get('previousPrice')?.value);
    formFile.append('discount', this.productForm.get('discount')?.value);
    formFile.append('discountType', this.productForm.get('discountType')?.value);
    formFile.append('minAmount', this.productForm.get('minAmount')?.value);
    formFile.append('purchasePrice', this.productForm.get('purchasePrice')?.value);
    formFile.append('delivery', this.productForm.get('delivery')?.value);
    formFile.append('deliveryPrice', this.productForm.get('deliveryPrice')?.value);
    formFile.append('formula', this.productForm.get('formula')?.value);
    formFile.append('brandId', this.productForm.get('brandId')?.value);
    formFile.append('measurementUnitId', this.productForm.get('measurementUnitId')?.value);
    formFile.append('amount', this.productForm.get('amount')?.value);

    this.productService.postProduct(formFile).subscribe({
      next: res => {
        this.msg = 'Producto creado satisfactoriamente'
        this.modalMsg.openModal();
        this.resetForm();
        this.isFormSubmitted = false;
      },
      error: err => {
        console.log(err);
        this.msg = `Error: Ocurrio un erro en la creacion del producto, es posible que el codigo
        ya exista, si el problema persiste consulte con el Adminstrador`
        this.modalMsg.openModal();
        this.isFormSubmitted = false;
      }
    })
  }

  resetForm(){
    this.productForm.reset();
    this.imageFile.removeAllFile();
    this.productForm.get('previousPrice')?.setValue(0);
    this.productForm.get('discount')?.setValue(null);
    this.productForm.get('discountType')?.setValue('');
    this.productForm.get('minAmount')?.setValue(0);
    this.productForm.get('delivery')?.setValue(false);
    this.productForm.get('deliveryPrice')?.setValue(null);
    this.productForm.get('deliveryPrice')?.disable();
    this.productForm.get('formula')?.setValue(false);
    this.productForm.get('amount')?.setValue(0);
    this.productForm.get('brandId')?.setValue('');
    this.productForm.get('measurementUnitId')?.setValue('');
  }

  setDelivery(){
    if (this.productForm.get('delivery')?.value) {
      this.productForm.get('deliveryPrice')?.enable();
    } else {
      this.productForm.get('deliveryPrice')?.disable();
    }
  }

  onRemove(event: any) {
		// console.log(event);
		this.imageFile.removeFile(event)
	}

  onSelect(event: any) {
    this.imageFile.captureFiles(...event.addedFiles)
	}

  openModal(){
    this.modalMsg.openModal();  
  }
}

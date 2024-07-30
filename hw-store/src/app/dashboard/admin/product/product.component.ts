import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../../core/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { DashboardComponent } from '../../dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus, faSave, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../../../core/models/product';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FilePreviewPipe } from '../../../shared/pipes/file-preview.pipe';
import { Image } from '../../../shared/class/image';
import { ModalComponent } from '../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    DashboardComponent, 
    FontAwesomeModule, 
    ReactiveFormsModule, 
    NgxDropzoneModule,
    ModalComponent
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{

  iconDelete = faXmark;
  iconPlus = faPlus;
  iconSave = faSave;
  idProduct: number;

  productForm: FormGroup = new FormGroup({
    code: new FormControl('',[Validators.required]),
    name: new FormControl('',[Validators.required]),
    brand: new FormControl('',[Validators.required]),
    creationDate: new FormControl({value: '', disabled: true},[Validators.required]),
    creator: new FormControl({value: '', disabled: true},[Validators.required]),
    discount: new FormControl('',[Validators.required]),
    discountType: new FormControl('',[Validators.required]),
    minAmount: new FormControl('',[Validators.required]),
    previousPrice: new FormControl('',[Validators.required]),
    purchasePrice: new FormControl('',[Validators.required]),
    retailPrice: new FormControl('',[Validators.required]),
    wholesalePrice: new FormControl('',[Validators.required]),
    active: new FormControl('',[Validators.required]),
    formula: new FormControl('',[Validators.required]),
    delivery: new FormControl('',[Validators.required]),
    deliveryPrice: new FormControl({value: '', disabled: false},[Validators.required]),
    description: new FormControl('',[Validators.required])
  });

  product: Product;
  files: File[] = [];
  
  @ViewChild('modalAddDim') modalAddDim!: ModalComponent;
  @ViewChild('modalAddCategory') modalAddCategory!: ModalComponent;

  constructor(private productService: ProductService,
    private activatedRoute: ActivatedRoute, public imageFile: Image
  ) {}

  ngOnInit(): void {
    this.idProduct = this.watchParams();
    this.getProduct();
  }

  watchParams(): any{
    return this.activatedRoute.snapshot.paramMap.get('id_product');
  }

  getProduct(){
    this.productService.getProduct(this.idProduct).subscribe({
      next: (value) => {
          this.product = value;
          
          this.product.creationDate = new Date(this.product.creationDate);
          console.log(this.product);
          this.updateDataForm();
          
      },
      error(err) {
          console.log(err);
          
      },
    })
  }

  submitProduct() {
    console.log(this.productForm.value);
    
  }

  updateDataForm() {
    if (this.product) {
      this.productForm.get('code')?.setValue(this.product.code);
      this.productForm.get('name')?.setValue(this.product.name);
      this.productForm.get('brand')?.setValue(this.product.brand?.name);
      this.productForm.get('creationDate')?.setValue(this.formatDateForInput(this.product.creationDate));
      this.productForm.get('creator')?.setValue(`desconocido`);
      if (this.product.creator) {
        this.productForm.get('creator')?.setValue(`${this.product.creator.id} - ${this.product.creator.username}`);
      }
      this.productForm.get('discount')?.setValue(this.product.discount);
      this.productForm.get('discountType')?.setValue(this.product.discountType);
      this.productForm.get('minAmount')?.setValue(this.product.minAmount);
      this.productForm.get('previousPrice')?.setValue(this.product.previousPrice);
      this.productForm.get('purchasePrice')?.setValue(this.product.purchasePrice);
      this.productForm.get('retailPrice')?.setValue(this.product.retailPrice);
      this.productForm.get('wholesalePrice')?.setValue(this.product.wholesalePrice);
      this.productForm.get('active')?.setValue(this.product.active);
      this.productForm.get('formula')?.setValue(this.product.formula);
      this.productForm.get('delivery')?.setValue(this.product.delivery);
      this.productForm.get('deliveryPrice')?.setValue(this.product.deliveryPrice);
      if (!this.product.delivery) {
        this.productForm.get('deliveryPrice')?.disable();
      }
      
      this.productForm.get('description')?.setValue(this.product.description);
    }
  }

  private formatDateForInput(date: Date): string {
    console.log(date.toISOString().slice(0, 16));
    return date.toISOString().slice(0, 16);
  }

  setDelivery(){
    if (this.productForm.get('delivery')?.value) {
      this.productForm.get('deliveryPrice')?.enable();
    } else {
      this.productForm.get('deliveryPrice')?.disable();
    }
  }

  

	onSelect(event: any) {
    this.imageFile.captureFiles(...event.addedFiles)
    // this.files.push(...event.addedFiles);
    // console.log(this.files);
    // this.files.forEach(element => {
    //   console.log('URL: ', URL.createObjectURL(element));
      
    // });

    
	}

	onRemove(event: any) {
		// console.log(event);
		this.imageFile.removeFile(event)
	}

  openModal(){
    this.modalAddDim.openModal();  
  }

  openModalCategory(){
    this.modalAddCategory.openModal();  
  }

}

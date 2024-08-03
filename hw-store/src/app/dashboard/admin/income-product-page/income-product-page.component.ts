import { Component, ViewChild } from '@angular/core';
import { DashboardComponent } from '../../dashboard.component';
import { ProductService } from '../../../core/services/product.service';
import { InventoryService } from '../../../core/services/inventory.service';
import { Supplier } from '../../../core/models/supplier';
import { Product } from '../../../core/models/product';
import { SupplierService } from '../../../core/services/supplier.service';
import { Purchase } from '../../../core/models/purchase';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { IncomeService } from '../../../core/services/income.service';
import { ModalComponent } from '../../../shared/components/modal/modal.component';


export interface PurchaseIncome {
  product: Product;
  amount: number;
  unitPrice: number;
  subTotal: number;
  comment?: string | null;
}

@Component({
  selector: 'app-income-product-page',
  standalone: true,
  imports: [DashboardComponent, ReactiveFormsModule, FontAwesomeModule, ModalComponent],
  templateUrl: './income-product-page.component.html',
  styleUrl: './income-product-page.component.scss'
})
export class IncomeProductPageComponent {

  iconDelete = faTrash;

  @ViewChild('modal') modal!: ModalComponent;

  supplier: Supplier | null;
  isExistSupplier: boolean = true;
  newProduct: Product | null;
  isExistProduct: boolean = true;
  listProducts: Array<PurchaseIncome> = [];
  purchases: Array<any> = [];
  total: number = 0;
  msg = '';

  supplierForm = new FormGroup({
    code: new FormControl(null, [Validators.required]),
    date: new FormControl(null, [Validators.required])
  });

  productForm = new FormGroup({
    code: new FormControl(null, [Validators.required]),
    amount: new FormControl(null, [Validators.required]),
    unitPrice: new FormControl(null, [Validators.required]),
    comment: new FormControl(null, null)
  });

  constructor(private productService: ProductService, 
    private incomeService: IncomeService,
    private supplierService: SupplierService) {
  }

  getSupplier(event: any){
    if (!event.target.value) {
      return;
    }
    this.supplierService.getSupplier(event.target.value).subscribe({
      next: res => {
        this.supplier = res;
        this.isExistSupplier = true;
      },
      error: err => {
        console.log(err);
        this.supplier = null;
        this.isExistSupplier = false;
      }
    });
  }

  getProduct(event: any){
    if (!event.target.value) {
      return;
    }
    this.productService.getProductByCode(event.target.value).subscribe({
      next: res => {
        this.newProduct = res;
        this.isExistProduct = true;
      },
      error: err => {
        console.log(err);
        this.newProduct = null;
        this.isExistProduct = false;
      }
    });
  }

  addProduct(){
    if (this.productForm.invalid || !this.newProduct) {
      return;
    }

    const amount = this.productForm.get('amount')?.value;
    const unitPrice = this.productForm.get('unitPrice')?.value;
    const comment = this.productForm.get('comment')?.value;

    const incomeProduct: PurchaseIncome = {
      product: this.newProduct,
      amount: amount? amount:0,
      unitPrice: unitPrice? unitPrice:0,
      subTotal: (amount? amount:0)*(unitPrice? unitPrice:0),
      comment: comment
    }

    this.listProducts.push(incomeProduct);
    this.calculateTotal();
    this.productForm.reset();
  }

  removeProduct(productId: number){
    this.listProducts.splice(productId, 1)
    this.calculateTotal();
  }

  calculateTotal(){
    if (!this.listProducts) {
      return;
    }
    this.total = 0;

    for (let i = 0; i < this.listProducts.length; i++) {
      this.total += this.listProducts[i].subTotal;
    }
  }

  submitIncome(){
    if (this.supplierForm.invalid || (this.listProducts && this.listProducts.length==0)) {
      return;
    }
    this.purchases = [];
    for (let i = 0; i < this.listProducts.length; i++) {
      const purchase = {
        productId: this.listProducts[i].product.id,
        amount: this.listProducts[i].amount,
        unitPrice: this.listProducts[i].unitPrice,
        description: this.listProducts[i].comment
      }
      this.purchases.push(purchase);
    }

    const income = {
      date: this.supplierForm.get('date')?.value,
      supplierId: this.supplier?.id,
      purchases: this.purchases
    }

    this.incomeService.postProductIncome(income).subscribe({
      next: res => {
        this.supplierForm.reset();
        this.productForm.reset();
        this.listProducts = [];
        this.purchases = [];
        this.total = 0;
        this.msg = "Los productos se ingresaron correctamente"
        this.modal.openModal();
      },
      error: err => {
        console.log(err);
        this.msg = "Error: No fue posible ingresar los productos"
        this.modal.openModal();
      }
    });

  }

}

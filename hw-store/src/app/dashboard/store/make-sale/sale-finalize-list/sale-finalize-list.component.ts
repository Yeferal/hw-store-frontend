import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Product } from '../../../../core/models/product';
import { AssignmentMeasure } from '../../../../core/models/assignment-measure';
import { SalesService } from '../../../../core/services/sales.service';
import { ModalComponent } from '../../../../shared/components/modal/modal.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


export interface SaleInvoice {
  nit: string;
  name: string;
  address: string;
  tel: string;
  date: Date;
  total: number;
  pending_payment: boolean;
}

export interface SaleDetailAux {
  product: Product;
  description: string;
  amount: number;
  assignmentMeasure: AssignmentMeasure;
  unitPrice: number;
  subTotal: number;
}

export interface SaleAux {
  nit: string;
  date: Date;
  name: string;
  phone: string;
  address: string;
  comment: string;
  total: number;
  saleProducts: Array<SaleProduct>;
}

export interface SaleIncompleteAux {
  nit: string;
  date: Date;
  name: string;
  phone: string;
  address: string;
  comment: string;
  total: number;
  saleProducts: Array<SaleProduct>;
  payment: number;
}

export interface SaleProduct {
  productId: number;
  measurementUnitId: number;
  amount: number;
  unitPrice: number;
  subTotal: number;
  description: string;
}

@Component({
  selector: 'app-sale-finalize-list',
  standalone: true,
  imports: [ModalComponent, ReactiveFormsModule],
  templateUrl: './sale-finalize-list.component.html',
  styleUrl: './sale-finalize-list.component.scss'
})
export class SaleFinalizeListComponent implements OnInit {

  @ViewChild('modalPayment') modalPayment!: ModalComponent;
  @Input() saleInvoice: SaleInvoice;
  @Input() listProductSale: Array<SaleDetailAux> = [];
  @Input() total: number = 0.0;
  @Output() isFinalizeCompleteEvent = new EventEmitter<boolean>();
  @Output() isFinalizeIncompleEvent = new EventEmitter<boolean>();
  @Output() isCloseModalEvent = new EventEmitter<boolean>();

  paymentForm: FormGroup = new FormGroup({
    payment: new FormControl(0, [Validators.required])
  });

  msgModal: string;

  constructor(private salesService: SalesService) {}

  ngOnInit(): void {
  }
  
  calculateTotal(){
    this.total = 0;
    this.listProductSale.forEach(element => {
      this.total += element.subTotal;
    });
  }

  finalizeSale(){
    const sale: SaleAux = {
      nit: this.saleInvoice.nit,
      date: this.saleInvoice.date,
      name: this.saleInvoice.name,
      phone: this.saleInvoice.tel,
      address: this.saleInvoice.address,
      comment: '',
      total: this.total,
      saleProducts: this.generateSaleProducts()
    }

    this.salesService.postSaleComplete(sale).subscribe({
      next: res => {
        this.isFinalizeCompleteEvent.emit(true);
      },
      error: err => {
        console.error(err);
        this.isFinalizeCompleteEvent.emit(false);
      }
    });
  }

  finalizeIncompelteSale(){
    const sale: SaleIncompleteAux = {
      nit: this.saleInvoice.nit,
      date: this.saleInvoice.date,
      name: this.saleInvoice.name,
      phone: this.saleInvoice.tel,
      address: this.saleInvoice.address,
      comment: '',
      total: this.total,
      saleProducts: this.generateSaleProducts(),
      payment: this.paymentForm.get('payment')?.value
    }

    this.salesService.postSaleIncompletes(sale).subscribe({
      next: res => {
        this.isFinalizeCompleteEvent.emit(true);
      },
      error: err => {
        console.error(err);
        this.isFinalizeCompleteEvent.emit(false);
      }
    });
  }

  closeModal(){
    this.isCloseModalEvent.emit(true);
  }

  openModalPayment(){
    this.paymentForm.get('payment')?.setValue(0);
    this.modalPayment.openModal();
  }

  generateSaleProducts(): Array<SaleProduct> {
    const saleProducts: Array<SaleProduct> = []
    for (let i = 0; i < this.listProductSale.length; i++) {
      const element = this.listProductSale[i];
      
      const saleProduct: SaleProduct = {
        productId: element.product.id,
        measurementUnitId: element.assignmentMeasure.measurementUnitId,
        amount: element.amount,
        description: element.description,
        subTotal: element.subTotal,
        unitPrice: element.unitPrice
      }
      saleProducts.push(saleProduct);
      
    }
    return saleProducts;
  }
}

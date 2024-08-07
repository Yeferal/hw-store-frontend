import { Component, ViewChild } from '@angular/core';
import { DashboardComponent } from '../../dashboard.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCross, faL, faPlus, faPlusCircle, faXmark, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { formatDate } from '@angular/common';
import { Product } from '../../../core/models/product';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { ProductService } from '../../../core/services/product.service';
import { AssignmentMeasure } from '../../../core/models/assignment-measure';
import { MeasurementUnit } from '../../../core/models/measurement-unit';
import { ClientService } from '../../../core/services/client.service';
import { SaleFinalizeListComponent } from './sale-finalize-list/sale-finalize-list.component';


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

@Component({
  selector: 'app-make-sale',
  standalone: true,
  imports: [
    DashboardComponent, 
    FontAwesomeModule, 
    ReactiveFormsModule, 
    ModalComponent, 
    InventoryListComponent,
    SaleFinalizeListComponent
  ],
  templateUrl: './make-sale.component.html',
  styleUrl: './make-sale.component.scss'
})
export class MakeSaleComponent {

  @ViewChild('modalInventory') modalInventory!: ModalComponent;
  @ViewChild('modalFinalize') modalFinalize!: ModalComponent;
  @ViewChild('modalMsg') modalMsg!: ModalComponent;

  iconPlus = faPlusCircle;
  iconDelete = faXmarkCircle;
  dateFormat = "yyyy-MM-dd";
  language = "en";

  invoiceForm: FormGroup = new FormGroup({
    nit: new FormControl(null, [Validators.required, Validators.pattern('[0-9]+')]),
    date: new FormControl(this.formatFormDate(new Date()), [Validators.required]),
    tel: new FormControl(null, null),
    name: new FormControl(null, null),
    address:  new FormControl(null, null)
  });

  listProductSale: Array<SaleDetailAux> = [];
  sale: SaleInvoice;
  total = 0.0;
  msg: string;

  constructor(private productService: ProductService, private clientService: ClientService) {}

  formatFormDate(date: Date) {
    return formatDate(date, this.dateFormat, this.language);
  }

  openModalInventory(){
    this.modalInventory.openModal();
  }

  receiveProduct($event: any) {
    let productIn: Product = $event;

    //getProduct
    this.productService.getProduct(productIn.id).subscribe({
      next: res => {
        const productTemp = res;
        this.addSaleDetail(productTemp);
      },
      error: err => {
        console.error(err);
      }
    });

  }

  addSaleDetail(product: Product){
    let assignmentMeasureBase = this.getAssignmentMeasureBase(product.assignmentMeasureList);
    if (assignmentMeasureBase == null) {
      return;
    }
    const saleDetailAux: SaleDetailAux = {
      product: product,
      description: product.name,
      amount: 1.00,
      assignmentMeasure: assignmentMeasureBase,
      unitPrice: assignmentMeasureBase.price,
      subTotal: 1 * assignmentMeasureBase.price
    }

    this.listProductSale.push(saleDetailAux)
    this.calculateTotal();
  }

  getMeasureBase(list: Array<AssignmentMeasure>): MeasurementUnit | null{
    for (let i = 0; i < list.length; i++) {
      const element = list[i];
      if (element.isBase && element.measurementUnit) {
        return element.measurementUnit;
      }
      
    }
    return null;
  }

  getAssignmentMeasureBase(list: Array<AssignmentMeasure>): AssignmentMeasure | null{
    for (let i = 0; i < list.length; i++) {
      const element = list[i];
      if (element.isBase && element.measurementUnit) {
        return element;
      }
    }
    return null;
  }

  calculateTotal(){
    this.total = 0;
    this.listProductSale.forEach(element => {
      this.total += element.subTotal;
    });
  }

  deleteProductSale(idSaleDetailAux: number){
    this.listProductSale.splice(idSaleDetailAux, 1);
  }

  changeAmount(event: any, id: number){
    const newValue: number = Number(event.target.value);
    this.listProductSale[id].amount = newValue;
    this.listProductSale[id].subTotal = newValue * this.listProductSale[id].unitPrice;
    this.calculateTotal();
  }

  changeMeasure(event: any, id: number){
    const newValue: number = Number(event.target.value);
    const assignmentMeasureBase = this.listProductSale[id].product.assignmentMeasureList[newValue];
    this.listProductSale[id].assignmentMeasure = assignmentMeasureBase;
    this.listProductSale[id].unitPrice = assignmentMeasureBase.price;
    this.listProductSale[id].subTotal = assignmentMeasureBase.price * this.listProductSale[id].amount;
    this.calculateTotal();
  }

  changePrice(event: any, id: number){
    const newValue: number = Number(event.target.value);
    this.listProductSale[id].unitPrice = newValue;
    this.listProductSale[id].subTotal = newValue * this.listProductSale[id].amount;
    this.calculateTotal();
  }

  changeSubTotal(event: any, id: number){
    const newValue: number = Number(event.target.value);
    this.listProductSale[id].subTotal = newValue;
    this.listProductSale[id].unitPrice = newValue / this.listProductSale[id].amount;
    this.calculateTotal();
  }

  changeNit(event: any){
    this.clientService.getClientByNit(event.target.value).subscribe({
      next: res => {
        this.invoiceForm.get('address')?.setValue(res.address);
        this.invoiceForm.get('name')?.setValue(res.name);
        this.invoiceForm.get('tel')?.setValue(res.phone);
      },
      error: err => {
        console.error(err);
      }
    });
  }

  openModalFinalizeSale(){
    //WATCH DATA
    this.sale = {
      nit: this.invoiceForm.get('nit')?.value,
      address: this.invoiceForm.get('address')?.value,
      tel: this.invoiceForm.get('tel')?.value,
      name: this.invoiceForm.get('name')?.value,
      date: this.invoiceForm.get('date')?.value,
      pending_payment: true,
      total: this.total
    }

    this.modalFinalize.openModal();

  }

  closeModalFinalizeSale(event: any){
    if (event) {
      this.modalFinalize.closeModal();
    }
  }

  finalizeComplete(event: any){
    if (event) {
      this.invoiceForm.reset();
      this.invoiceForm.get('date')?.setValue(this.formatFormDate(new Date()));
      this.listProductSale = [];
      this.total = 0.00;
      this.modalFinalize.closeModal();
      this.msg = 'Se completo la Venta Correctamente'
      this.modalMsg.openModal();
    } else {
      this.msg = 'ERROR: No se puedo completar la venta'
      this.modalMsg.openModal();
    }
  }

  finalizeIncomplete(event: any){
    if (event) {
      this.invoiceForm.reset();
      this.invoiceForm.get('date')?.setValue(this.formatFormDate(new Date()));
      this.listProductSale = [];
      this.total = 0.00;
      this.modalFinalize.closeModal();
      this.msg = 'Se completo la Venta Correctamente'
      this.modalMsg.openModal();
    } else {
      this.msg = 'ERROR: No se puedo completar la venta'
      this.modalMsg.openModal();
    }
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleLeft, faAngleRight, faFilter, faInfoCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FilterPaginate } from '../../../../core/models/filter-paginate';
import { Product } from '../../../../core/models/product';
import { PagePaginate } from '../../../../core/models/page-paginate';
import { ProductService } from '../../../../core/services/product.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inventory-list',
  standalone: true,
  imports: [FontAwesomeModule, ReactiveFormsModule, RouterLink],
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.scss'
})
export class InventoryListComponent implements OnInit {

  @Output() addProductEvent = new EventEmitter<Product>();

  iconInfo = faInfoCircle;
  iconArrowRight = faAngleRight;
  iconArrowLeft = faAngleLeft;

  iconSearch = faSearch;
  iconFilter = faFilter;

  filter: FilterPaginate = {page: 0, size: 2, sortOrder: 'ASC', sortField: 'username'}
  productList: Array<Product> = [];
  pagePaginate: PagePaginate;

  filterForm: FormGroup = new FormGroup({
    searchValue: new FormControl('clavo 2',null),
    sortField: new FormControl('name',null),
    sortOrder: new FormControl('ASC',null),
    size: new FormControl('10',null)
  });

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getListProduct(){
    this.productService.getProducts(this.filter).subscribe({
      next: (res) => {
        this.pagePaginate = res;
        this.productList = this.pagePaginate.content;
        
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getProducts(){
    this.filter.searchValue = this.filterForm.get('searchValue')?.value;
    this.filter.sortField = this.filterForm.get('sortField')?.value;
    this.filter.sortOrder = this.filterForm.get('sortOrder')?.value;
    this.filter.size = this.filterForm.get('size')?.value;
    this.filter.page = 0;
    this.getListProduct();
  }

  getProductFilter(){
    this.filter.sortField = this.filterForm.get('sortField')?.value;
    this.filter.sortOrder = this.filterForm.get('sortOrder')?.value;
    this.filter.size = this.filterForm.get('size')?.value;
    this.getListProduct();
  }

  getNexPage(){
    this.filter.page = this.filter.page>=this.pagePaginate.totalPages? this.pagePaginate.totalPages-1 : this.filter.page+1;
    this.getListProduct();
  }

  getPreviousPage(){
    this.filter.page = this.filter.page<=0? 0 : this.filter.page-1;
    this.getListProduct();
  }

  getPage(pageNumber: number){
    this.filter.page = pageNumber;
    this.getListProduct();
  }

  counter(i: number) {
    return new Array(i);
  }

  addProduct(product: Product) {
    this.addProductEvent.emit(product)
  }
}

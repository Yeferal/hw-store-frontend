import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleLeft, faAngleRight, faEdit, faFilter, faInfoCircle, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FilterPaginate } from '../../../core/models/filter-paginate';
import { PagePaginate } from '../../../core/models/page-paginate';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../../core/services/product.service';
import { RouterLink } from '@angular/router';
import { Product } from '../../../core/models/product';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [FontAwesomeModule, ReactiveFormsModule, RouterLink],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss'
})
export class InventoryComponent implements OnInit {
  iconEdit = faEdit;
  iconDelete = faTrash;
  iconInfo = faInfoCircle;
  iconArrowRight = faAngleRight;
  iconArrowLeft = faAngleLeft;

  iconSearch = faSearch;
  iconFilter = faFilter;

  filter: FilterPaginate = {page: 0, size: 2, sortOrder: 'ASC', sortField: 'username'}
  productList: Array<Product> = [];
  pagePaginate: PagePaginate;

  filterForm: FormGroup = new FormGroup({
    searchValue: new FormControl('',null),
    sortField: new FormControl('name',null),
    sortOrder: new FormControl('ASC',null),
    size: new FormControl('25',null)
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
}

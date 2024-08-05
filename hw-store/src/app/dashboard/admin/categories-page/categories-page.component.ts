import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../../dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { faAngleLeft, faAngleRight, faEdit, faFilter, faInfoCircle, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FilterPaginate } from '../../../core/models/filter-paginate';
import { PagePaginate } from '../../../core/models/page-paginate';
import { Category } from '../../../core/models/category';
import { InventoryService } from '../../../core/services/inventory.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories-page',
  standalone: true,
  imports: [DashboardComponent, FontAwesomeModule, ReactiveFormsModule, RouterLink],
  templateUrl: './categories-page.component.html',
  styleUrl: './categories-page.component.scss'
})
export class CategoriesPageComponent implements OnInit {

  iconEdit = faEdit;
  iconDelete = faTrash;
  iconInfo = faInfoCircle;
  iconArrowRight = faAngleRight;
  iconArrowLeft = faAngleLeft;

  iconSearch = faSearch;
  iconFilter = faFilter;

  filter: FilterPaginate = {page: 0, size: 2, sortOrder: 'ASC', sortField: 'username'}
  categoryList: Array<Category> = [];
  pagePaginate: PagePaginate;

  filterForm: FormGroup = new FormGroup({
    searchValue: new FormControl('',null),
    sortField: new FormControl('name',null),
    sortOrder: new FormControl('ASC',null),
    size: new FormControl('25',null)
  });

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getListCategory(){
    this.inventoryService.getCategories(this.filter).subscribe({
      next: (res) => {
        this.pagePaginate = res;
        this.categoryList = this.pagePaginate.content;
        
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getCategories(){
    this.filter.searchValue = this.filterForm.get('searchValue')?.value;
    this.filter.sortField = this.filterForm.get('sortField')?.value;
    this.filter.sortOrder = this.filterForm.get('sortOrder')?.value;
    this.filter.size = this.filterForm.get('size')?.value;
    this.filter.page = 0;
    this.getListCategory();
  }

  getCategoryFilter(){
    this.filter.sortField = this.filterForm.get('sortField')?.value;
    this.filter.sortOrder = this.filterForm.get('sortOrder')?.value;
    this.filter.size = this.filterForm.get('size')?.value;
    this.getListCategory();
  }

  getNexPage(){
    this.filter.page = this.filter.page>=this.pagePaginate.totalPages? this.pagePaginate.totalPages-1 : this.filter.page+1;
    this.getListCategory();
  }

  getPreviousPage(){
    this.filter.page = this.filter.page<=0? 0 : this.filter.page-1;
    this.getListCategory();
  }

  getPage(pageNumber: number){
    this.filter.page = pageNumber;
    this.getListCategory();
  }

  counter(i: number) {
    return new Array(i);
  }

}

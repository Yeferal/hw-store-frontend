import { Component } from '@angular/core';
import { DashboardComponent } from '../../dashboard.component';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleLeft, faAngleRight, faEdit, faFilter, faInfoCircle, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FilterPaginate } from '../../../core/models/filter-paginate';
import { PagePaginate } from '../../../core/models/page-paginate';
import { Brand } from '../../../core/models/brand';
import { InventoryService } from '../../../core/services/inventory.service';

@Component({
  selector: 'app-brands-page',
  standalone: true,
  imports: [DashboardComponent, FontAwesomeModule, ReactiveFormsModule, RouterLink],
  templateUrl: './brands-page.component.html',
  styleUrl: './brands-page.component.scss'
})
export class BrandsPageComponent {

  iconEdit = faEdit;
  iconDelete = faTrash;
  iconInfo = faInfoCircle;
  iconArrowRight = faAngleRight;
  iconArrowLeft = faAngleLeft;

  iconSearch = faSearch;
  iconFilter = faFilter;

  filter: FilterPaginate = {page: 0, size: 2, sortOrder: 'ASC', sortField: 'username'}
  brandList: Array<Brand> = [];
  pagePaginate: PagePaginate;

  filterForm: FormGroup = new FormGroup({
    searchValue: new FormControl('',null),
    sortField: new FormControl('name',null),
    sortOrder: new FormControl('ASC',null),
    size: new FormControl('25',null)
  });

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getListBrand(){
    this.inventoryService.getBrands(this.filter).subscribe({
      next: (res) => {
        this.pagePaginate = res;
        this.brandList = this.pagePaginate.content;
        console.log(this.brandList);
        
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getBrands(){
    this.filter.searchValue = this.filterForm.get('searchValue')?.value;
    this.filter.sortField = this.filterForm.get('sortField')?.value;
    this.filter.sortOrder = this.filterForm.get('sortOrder')?.value;
    this.filter.size = this.filterForm.get('size')?.value;
    this.filter.page = 0;
    this.getListBrand();
  }

  getBrandFilter(){
    this.filter.sortField = this.filterForm.get('sortField')?.value;
    this.filter.sortOrder = this.filterForm.get('sortOrder')?.value;
    this.filter.size = this.filterForm.get('size')?.value;
    this.getListBrand();
  }

  getNexPage(){
    this.filter.page = this.filter.page>=this.pagePaginate.totalPages? this.pagePaginate.totalPages-1 : this.filter.page+1;
    this.getListBrand();
  }

  getPreviousPage(){
    this.filter.page = this.filter.page<=0? 0 : this.filter.page-1;
    this.getListBrand();
  }

  getPage(pageNumber: number){
    this.filter.page = pageNumber;
    this.getListBrand();
  }

  counter(i: number) {
    return new Array(i);
  }
}

import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../core/services/account.service';
import { FilterPaginate } from '../../../core/models/filter-paginate';
import { Account } from '../../../core/models/account';
import { PagePaginate } from '../../../core/models/page-paginate';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleLeft, faAngleRight, faArrowLeft, faArrowRight, faEdit, faFilter, faInfoCircle, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.scss'
})
export class ListUsersComponent implements OnInit {

  iconEdit = faEdit;
  iconDelete = faTrash;
  iconInfo = faInfoCircle;
  iconArrowRight = faAngleRight;
  iconArrowLeft = faAngleLeft;

  iconSearch = faSearch;
  iconFilter = faFilter;

  filter: FilterPaginate = {page: 0, size: 2, sortOrder: 'ASC', sortField: 'username'}
  accountList: Array<Account> = [];
  pagePaginate: PagePaginate;

  filterForm: FormGroup = new FormGroup({
    searchValue: new FormControl('',null),
    sortField: new FormControl('username',null),
    sortOrder: new FormControl('ASC',null),
    size: new FormControl('2',null)
  });

  constructor(private usersService: AccountService){}

  ngOnInit(): void {
      this.getAccounts();
  }

  getListAccount(){
    this.usersService.getAccounts(this.filter).subscribe({
      next: (res) => {
        this.pagePaginate = res;
        this.accountList = this.pagePaginate.content;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getAccounts(){
    this.filter.searchValue = this.filterForm.get('searchValue')?.value;
    this.filter.sortField = this.filterForm.get('sortField')?.value;
    this.filter.sortOrder = this.filterForm.get('sortOrder')?.value;
    this.filter.size = this.filterForm.get('size')?.value;
    this.filter.page = 0;
    this.getListAccount();
  }

  getAccountFilter(){
    this.filter.sortField = this.filterForm.get('sortField')?.value;
    this.filter.sortOrder = this.filterForm.get('sortOrder')?.value;
    this.filter.size = this.filterForm.get('size')?.value;
    this.getListAccount();
  }

  getNexPage(){
    this.filter.page = this.filter.page>=this.pagePaginate.totalPages? this.pagePaginate.totalPages-1 : this.filter.page+1;
    this.getListAccount();
  }

  getPreviousPage(){
    this.filter.page = this.filter.page<=0? 0 : this.filter.page-1;
    this.getListAccount();
  }

  getPage(pageNumber: number){
    this.filter.page = pageNumber;
    this.getListAccount();
  }

  counter(i: number) {
    return new Array(i);
  }
}

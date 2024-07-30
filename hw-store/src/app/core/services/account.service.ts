import { Injectable } from '@angular/core';
import { GLOBAL_API } from '../../global/api-url';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PagePaginate } from '../models/page-paginate';
import { FilterPaginate } from '../models/filter-paginate';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  readonly URL_API = GLOBAL_API.API_ADMIN;

  constructor(private http: HttpClient) { }

  getAccounts(data: any): Observable<PagePaginate> {
    return this.http.get<PagePaginate>(this.URL_API+'/v1/accounts', {
      withCredentials: true,
      params: data
    });
  }

  postAccount(data: any): Observable<any> {
    return this.http.post<any>(this.URL_API+'/v1/accounts', data, {
      withCredentials: true
    });
  }
}

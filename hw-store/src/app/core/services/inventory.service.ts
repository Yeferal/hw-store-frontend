import { Injectable } from '@angular/core';
import { GLOBAL_API } from '../../global/api-url';
import { HttpClient } from '@angular/common/http';
import { PagePaginate } from '../models/page-paginate';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  readonly URL_API = GLOBAL_API.API_INVENTORY;

  constructor(private http: HttpClient) { }

  getProducts(data: any): Observable<PagePaginate> {
    return this.http.get<PagePaginate>(this.URL_API+'/v1/accounts', {
      withCredentials: true,
      params: data
    });
  }

  getBrands(data: any): Observable<PagePaginate> {
    return this.http.get<PagePaginate>(this.URL_API+'/v1/accounts', {
      withCredentials: true,
      params: data
    });
  }
}

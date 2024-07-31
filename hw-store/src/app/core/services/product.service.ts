import { Injectable } from '@angular/core';
import { GLOBAL_API } from '../../global/api-url';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PagePaginate } from '../models/page-paginate';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly URL_API = GLOBAL_API.API_INVENTORY;

  constructor(private http: HttpClient) { }

  getProducts(data: any): Observable<PagePaginate> {
    return this.http.get<PagePaginate>(this.URL_API+'/v1/products', {
      withCredentials: true,
      params: data
    });
  }

  getProduct(idProduct: any): Observable<Product> {
    return this.http.get<Product>(this.URL_API+`/v1/products/${idProduct}`, {
      withCredentials: true
    });
  }

  postProduct(data: any): Observable<any> {
    return this.http.post<any>(this.URL_API+'/v1/products', data, {
      withCredentials: true
    });
  }
}

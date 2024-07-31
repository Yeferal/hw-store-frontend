import { Injectable } from '@angular/core';
import { GLOBAL_API } from '../../global/api-url';
import { HttpClient } from '@angular/common/http';
import { PagePaginate } from '../models/page-paginate';
import { Observable } from 'rxjs';
import { MeasurementUnit } from '../models/measurement-unit';
import { Category } from '../models/category';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  readonly URL_API = GLOBAL_API.API_INVENTORY;

  constructor(private http: HttpClient) { }

  getProducts(data: any): Observable<PagePaginate> {
    return this.http.get<PagePaginate>(this.URL_API+'/v1/products', {
      withCredentials: true,
      params: data
    });
  }

  postBrands(data: any): Observable<any> {
    return this.http.post<any>(this.URL_API+'/v1/products/brands', data, {
      withCredentials: true
    });
  }

  getBrands(data: any): Observable<PagePaginate> {
    return this.http.get<PagePaginate>(this.URL_API+'/v1/products/brands', {
      withCredentials: true,
      params: data
    });
  }

  getAllBrands(): Observable<Array<Brand>> {
    return this.http.get<Array<Brand>>(this.URL_API+'/v1/products/all-brands', {
      withCredentials: true
    });
  }

  postCategories(data: any): Observable<any> {
    return this.http.post<any>(this.URL_API+'/v1/products/categories', data, {
      withCredentials: true
    });
  }

  getCategories(data: any): Observable<PagePaginate> {
    return this.http.get<PagePaginate>(this.URL_API+'/v1/products/categories', {
      withCredentials: true,
      params: data
    });
  }

  getAllCategories(): Observable<Array<Category>> {
    return this.http.get<Array<Category>>(this.URL_API+'/v1/products/all-categories', {
      withCredentials: true
    });
  }

  postMeasurementUnit(data: any): Observable<any> {
    return this.http.post<any>(this.URL_API+'/v1/products/measurement-units', data, {
      withCredentials: true
    });
  }

  getMeasurementUnit(data: any): Observable<PagePaginate> {
    return this.http.get<PagePaginate>(this.URL_API+'/v1/products/measurement-units', {
      withCredentials: true,
      params: data
    });
  }

  getAllMeasurementUnit(): Observable<Array<MeasurementUnit>> {
    return this.http.get<Array<MeasurementUnit>>(this.URL_API+'/v1/products/all-measurement-units', {
      withCredentials: true
    });
  }
}

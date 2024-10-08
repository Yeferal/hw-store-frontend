import { Injectable } from '@angular/core';
import { GLOBAL_API } from '../../global/api-url';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Supplier } from '../models/supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  readonly URL_API = GLOBAL_API.API_INVENTORY;

  constructor(private http: HttpClient) { }

  getSupplier(data: any): Observable<Supplier> {
    return this.http.get<Supplier>(this.URL_API+`/v1/suppliers/${data}`, {
      withCredentials: true
    });
  }
}

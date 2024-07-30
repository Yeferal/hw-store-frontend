import { Injectable } from '@angular/core';
import { GLOBAL_API } from '../../global/api-url';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  readonly URL_API = GLOBAL_API.API_INVENTORY;

  constructor(private http: HttpClient) { }
}

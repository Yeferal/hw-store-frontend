import { Injectable } from '@angular/core';
import { GLOBAL_API } from '../../global/api-url';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  readonly URL_API = GLOBAL_API.API_INVENTORY;

  constructor(private http: HttpClient) { }

  postProductIncome(data: any): Observable<any> {
    return this.http.post<any>(this.URL_API+'/v1/inventories/register-incomes', data, {
      withCredentials: true
    })
  }
}

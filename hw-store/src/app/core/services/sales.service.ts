import { Injectable } from '@angular/core';
import { GLOBAL_API } from '../../global/api-url';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  readonly URL_API = GLOBAL_API.API_SALES;

  constructor(private http: HttpClient) { }

  postSaleComplete(data: any): Observable<any>{
    return this.http.post<any>(this.URL_API+`/v1/sales`, data, {
      withCredentials: true
    });
  }

  postSaleIncompletes(data: any): Observable<any>{
    return this.http.post<any>(this.URL_API+`/v1/sales/incompletes`, data, {
      withCredentials: true
    });
  }


}

import { Injectable } from '@angular/core';
import { GLOBAL_API } from '../../global/api-url';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  readonly URL_API = GLOBAL_API.API_SALES;

  constructor(private http: HttpClient) { }

  getClientByNit(nit: string): Observable<Client>{
    return this.http.get<Client>(this.URL_API+`/v1/clients/${nit}`, {
      withCredentials: true
    });
  }
}

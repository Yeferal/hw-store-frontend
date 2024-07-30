import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL_API } from '../../global/api-url';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  readonly URL_API = GLOBAL_API.API_REPORTS;

  constructor(private http: HttpClient) { }
}

import { Injectable } from '@angular/core';
import { GLOBAL_API } from '../../global/api-url';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey: string = 'authToken';

  readonly URL_API = GLOBAL_API.API_AUTH;

  constructor(private http: HttpClient) { }

  postAuth(data: any): Observable<any> {
    return this.http.post<any>(this.URL_API+'/v1/auth/authenticate', data, {
      withCredentials: true
    });
  }

  getIsLoggin(): Observable<boolean> {
    return this.http.get<boolean>(this.URL_API+'/v1/auth/isLoggin', {
      withCredentials: true
    });
  }

  getLogout(): Observable<boolean> {
    return this.http.get<boolean>(this.URL_API+'/v1/auth/logout', {
      withCredentials: true
    });
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }
  
  // Método para guardar una cookie
  setCookie(name: string, value: string, days: number): void {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  // Método para obtener una cookie
  getCookie(name: string): string | null {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  // Método para eliminar una cookie
  deleteCookie(name: string): void {
    this.setCookie(name, "", -1);
  }


}

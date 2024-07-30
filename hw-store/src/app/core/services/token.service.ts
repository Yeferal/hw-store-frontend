import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { jwtDecode, JwtPayload } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private tokenKey = 'authToken';
  private roles: string[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  setToken(token: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.tokenKey, token);
    } else {
      // manejar token en el servidor si es necesario
    }
  }

  getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(this.tokenKey);
    } else {
      return null; // o manejar token en el servidor
    }
  }

  removeToken(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.tokenKey);
    } else {
      // manejar eliminación de token en el servidor si es necesario
    }
  }

  getRoles(): Array<string> {
    const token = this.getToken();
    if (token) {
      const decoded: any = jwtDecode<JwtPayload>(token);
      this.roles = decoded.roles || [];
      return this.roles;
    }
    return [];
  }

  // Método para verificar si el usuario tiene un rol específico
  hasRole(role: string): boolean {
    return this.getRoles().includes(role);
  }

  // Método para verificar si el usuario está autenticado
  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}

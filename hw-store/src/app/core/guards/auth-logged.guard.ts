import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { TokenService } from '../services/token.service';

export const authLoggedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const tokenService = inject(TokenService);
  const router = inject(Router);
  
  // return authService.getIsLoggin().pipe(
  //   map(res => {
  //     if (!res) {
  //       router.navigate(['test']);
  //       return false;
  //     }
  //     return true;
  //   }),
  //   catchError((error) => {
  //     router.navigate(['test']);
  //     return of(false);
  //   })
  // );

  // authService.getIsLoggin().pipe(
  //   map(isLoggedIn => {
  //     console.log("Entro map");
  //     if (isLoggedIn) {
  //       console.log("es verdadero");
  //     } else {
  //       console.log("Es falso");
  //     }
  //   }),
  //   catchError(error => {
  //     console.log('Error entro');
  //     console.log('es falso');
  //     return of(false);
  //   })
  // );

  // authService.getIsLoggin().subscribe({
  //   next: (res) => {
  //     if (res) {
  //       console.log("Redirect; test");
  //       router.navigateByUrl('/test');
  //       // router.navigate(['test']);
  //       // return false;
  //     }
  //   }
  // });

  console.log('llego');
  
  return true;
};

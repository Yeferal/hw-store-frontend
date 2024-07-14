import { CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { TokenService } from '../services/token.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const tokenService = inject(TokenService);
  const router = inject(Router);

  if (tokenService.getToken()) {
    return true;
  } 
  return router.createUrlTree(['login'])

  // return authService.getIsLoggin().pipe(
  //   map(res => {
  //     if (res) {        
  //       return true;
  //     }
  //     router.navigate(['/login'])
  //     // return false;
  //     return router.createUrlTree(['login'])
  //   })
  // );
};

export const authMatchGuard: CanMatchFn = (route, state) => {
  const authService = inject(AuthService);
  const tokenService = inject(TokenService);

  if (!tokenService.getToken()) {
    return false;
  } 

  return authService.getIsLoggin().pipe(
    map(res => {
      if (res) {        
        return true;
      }
      return false;
    })
  );
};
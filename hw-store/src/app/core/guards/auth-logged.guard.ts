import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { TokenService } from '../services/token.service';
import { catchError, map, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export const authLoggedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.getIsLoggin().pipe(
    map(res => {
      if (res) {
        router.navigate(['/home']);
        return false;
      }
      return true;
    }),
    catchError((error: HttpErrorResponse) => {
      return of(true);
    })
  );
};

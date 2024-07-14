import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  authService.getIsLoggin().subscribe({
    next: (res) => {
      if (res) {
        return true;
      }
      router.navigate(['/login']);
      return false;
    },
    error: (err) => {
      router.navigate(['/login']);
      return false;
    }
  });

  return false;
};

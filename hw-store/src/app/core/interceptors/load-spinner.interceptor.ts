import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoaderService } from '../services/loader.service';
import { finalize } from 'rxjs';

export const loadSpinnerInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next) => {
  const loaderService = inject(LoaderService);
  loaderService.setLoading(true);

  return next(req)
      .pipe(
        finalize(() => loaderService.setLoading(false))
  );
};


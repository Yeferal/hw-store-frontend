import { Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { authGuard } from './core/guards/auth.guard';
import { NotFoundPageComponent } from './shared/components/not-found-page/not-found-page.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo:'login', 
        pathMatch:'full'
    },
    {
        path: '',
        loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES)
    },
    {
        path: 'test',
        component: TestComponent,
        canActivate: [authGuard]
    },
    {
        path: '**',
        component: NotFoundPageComponent
    }
];

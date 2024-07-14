import { Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { authGuard, authMatchGuard } from './core/guards/auth.guard';
import { NotFoundPageComponent } from './shared/components/not-found-page/not-found-page.component';
import { LoginComponent } from './auth/login/login.component';
import { authLoggedGuard } from './core/guards/auth-logged.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo:'login', 
        pathMatch:'full'
    },
    {
        path: 'home',
        component: TestComponent,
        canActivate: [authGuard],
        // canActivate: [authLoggedGuard],
        // canMatch: [authMatchGuard]
    },
    {
        path: 'home',
        component: LoginComponent,
    },
    {
        path: '',
        loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES)
    },
    
    {
        path: '**',
        component: NotFoundPageComponent
    }
];

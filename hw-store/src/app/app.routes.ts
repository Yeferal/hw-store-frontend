import { Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { authGuard, authMatchGuard } from './core/guards/auth.guard';
import { NotFoundPageComponent } from './shared/components/not-found-page/not-found-page.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo:'login', 
        pathMatch:'full'
    },
    {
        path: 'home',
        component: DashboardComponent,
        canActivate: [authGuard],
        // canMatch: [authMatchGuard]
    },
    {
        path: 'test',
        component: TestComponent,
        canActivate: [authGuard],
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
        path: 'home/admin',
        loadChildren: () => import('./dashboard/admin/admin.routes').then(m => m.AUTH_ROUTES)
    },
    {
        path: 'home/store',
        loadChildren: () => import('./dashboard/store/store.routes').then(m => m.STORE_ROUTES)
    },
    

    {
        path: '**',
        component: NotFoundPageComponent
    }
];

import { Routes } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { authLoggedGuard } from "../core/guards/auth-logged.guard";
import { authGuard } from "../core/guards/auth.guard";

export const AUTH_ROUTES: Routes = [
    {
        path: 'register', 
        component: LoginComponent
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [authLoggedGuard],
        // canActivate: [authGuard],
    }
];
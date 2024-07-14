import { Routes } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { authLoggedGuard } from "../core/guards/auth-logged.guard";

export const AUTH_ROUTES: Routes = [
    {
        path: 'register', 
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent,
        // canActivate: [authLoggedGuard]
    }
];
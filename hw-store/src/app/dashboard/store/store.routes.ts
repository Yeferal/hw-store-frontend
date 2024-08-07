import { Routes } from "@angular/router";
import { authGuard } from "../../core/guards/auth.guard";
import { MakeSaleComponent } from "./make-sale/make-sale.component";

export const STORE_ROUTES: Routes = [
    {
        path: 'make-sale', 
        component: MakeSaleComponent,
        canActivate: [authGuard]
    },
]
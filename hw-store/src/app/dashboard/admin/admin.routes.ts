import { Routes } from "@angular/router";
import { CreateAccountPageComponent } from "./create-account-page/create-account-page.component";
import { ListUsersPageComponent } from "./list-users-page/list-users-page.component";
import { authGuard } from "../../core/guards/auth.guard";
import { AddProductPageComponent } from "./add-product-page/add-product-page.component";
import { IncomeProductPageComponent } from "./income-product-page/income-product-page.component";
import { CategoriesPageComponent } from "./categories-page/categories-page.component";
import { BrandsPageComponent } from "./brands-page/brands-page.component";
import { InventoryPageComponent } from "./inventory-page/inventory-page.component";
import { ProductComponent } from "./product/product.component";
export const AUTH_ROUTES: Routes = [
    {
        path: 'add-users', 
        component: CreateAccountPageComponent,
        canActivate: [authGuard]
    },
    {
        path: 'users', 
        component: ListUsersPageComponent,
        canActivate: [authGuard]
    },
    {
        path: 'inventory/inventory', 
        component: InventoryPageComponent,
        canActivate: [authGuard]
    },
    {
        path: 'inventory/inventory/products/:id_product', 
        component: ProductComponent,
        // canActivate: [authGuard]
    },
    {
        path: 'inventory/add-products', 
        component: AddProductPageComponent,
        canActivate: [authGuard]
    },
    {
        path: 'inventory/income-products', 
        component: IncomeProductPageComponent,
        canActivate: [authGuard]
    },
    {
        path: 'inventory/categories', 
        component: CategoriesPageComponent,
        canActivate: [authGuard]
    },
    {
        path: 'inventory/brands', 
        component: BrandsPageComponent,
        canActivate: [authGuard]
    }
];
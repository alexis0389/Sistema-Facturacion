import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AuthService } from "./services/auth/auth.service";
import { CustomersService } from "./services/customers/customers.service";
import { ProductsService } from "./services/products/products.service";

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    providers: [
        CustomersService,
        AuthService,
        ProductsService
    ]
})
export class CoreModule { }
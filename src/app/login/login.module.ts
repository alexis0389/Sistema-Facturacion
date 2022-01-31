import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../material/material.module";

import { LoginComponent } from "./components/login/login.component";
import { LoginRoutingModule } from "./login-routing.module";
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from "@angular/forms";
import { PasswordConfirmDirective } from "../home/directives/password-confirm/password-confirm.directive";

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        PasswordConfirmDirective
    ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        MaterialModule,
        ReactiveFormsModule
    ]
})
export class LoginModule { }
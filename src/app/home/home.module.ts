import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../material/material.module";
import { BannerComponent } from "./components/banner/banner.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
    declarations: [
        BannerComponent,
        HomeComponent,
        FooterComponent,
        HeaderComponent,
    ],
    imports: [
        HomeRoutingModule,
        RouterModule,
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ]
})
export class HomeModule { }
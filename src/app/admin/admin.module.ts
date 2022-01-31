import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CustomerTableComponent } from './components/customer-table/customer-table.component';
import { CreateCustomerFormComponent } from './components/create-customer-form/create-customer-form.component';
import { CreateProductFormComponent } from './components/create-product-form/create-product-form.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { MovementsTableComponent } from './components/movements-table/movements-table.component';
import { SaleComponent } from './components/sale/sale.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { BillTableComponent } from './components/bill-table/bill-table.component';
import { BillDetailTableComponent } from './components/bill-detail-table/bill-detail-table.component';

@NgModule({
  declarations: [
    NavComponent,
    CustomerTableComponent,
    CreateCustomerFormComponent,
    CreateProductFormComponent,
    ProductTableComponent,
    MovementsTableComponent,
    SaleComponent,
    BillTableComponent,
    BillDetailTableComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ]
})
export class AdminModule { }

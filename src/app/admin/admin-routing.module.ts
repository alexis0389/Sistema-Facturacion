import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillDetailTableComponent } from './components/bill-detail-table/bill-detail-table.component';
import { BillTableComponent } from './components/bill-table/bill-table.component';
import { CreateCustomerFormComponent } from './components/create-customer-form/create-customer-form.component';
import { CreateProductFormComponent } from './components/create-product-form/create-product-form.component';
import { CustomerTableComponent } from './components/customer-table/customer-table.component';
import { MovementsTableComponent } from './components/movements-table/movements-table.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { SaleComponent } from './components/sale/sale.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'customers',
        component: CustomerTableComponent
      },
      {
        path: 'customers/createCustomers',
        component: CreateCustomerFormComponent
      },
      {
        path: 'products',
        component: ProductTableComponent
      },
      {
        path: 'products/createProducts',
        component: CreateProductFormComponent
      },
      {
        path: 'movements',
        component: MovementsTableComponent
      },
      {
        path: 'sale',
        component: SaleComponent
      },
      {
        path: 'bills',
        component: BillTableComponent
      },
      {
        path: 'bills/billDetails',
        component: BillDetailTableComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/core/models/customers.model';
import { CustomersService } from 'src/app/core/services/customers/customers.service';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css'],
})
export class CustomerTableComponent implements OnInit {
  searchField: any;
  clearSearchField() {
    this.searchField = ''
  }
 
  customers!: Customer[];
  displayedColumns: string[] = ['id', 'nombre', 'direccion', 'email', 'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
   
  constructor(
    private customersService: CustomersService,
  ) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.fetchCustomers();
  }

  fetchCustomers() {
    this.customersService.getAllCustomers()
    .subscribe((response) => {
      this.dataSource.data = response;
    })
  }

  deleteCust(id: number) {
    this.customersService.deleteCustomer(id)
    .subscribe(rta => {
      if (rta) {
        let index: number = 0
        index = this.customers.findIndex(customer => customer.id === id);
        this.customers = [...this.customers]
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }
}



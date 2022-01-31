import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BillsService } from 'src/app/core/services/bills/bills.service';

@Component({
  selector: 'app-bill-table',
  templateUrl: './bill-table.component.html',
  styleUrls: ['./bill-table.component.css']
})
export class BillTableComponent implements OnInit {
  searchField: any;
  clearSearchField() {
    this.searchField = ''
  }

  displayedColumns = ['id', 'clienteId', 'fecha', 'descuento', 'iva', 'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(
    private billsService: BillsService
  ) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.fetchBills();
  }

  fetchBills() {
    this.billsService.getAllBills()
    .subscribe((response: any) => {
      this.dataSource.data = response
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }
}

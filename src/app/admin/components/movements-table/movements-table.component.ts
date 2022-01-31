import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MovementsService } from 'src/app/core/services/movements/movements.service';

@Component({
  selector: 'app-movements-table',
  templateUrl: './movements-table.component.html',
  styleUrls: ['./movements-table.component.css']
})
export class MovementsTableComponent implements OnInit {
  searchField: any;
  clearSearchField() {
    this.searchField = ''
  }

  displayedColumns: string[] = [
    'id', 'fecha', 'hora', 'productoId', 'descripcion', 'tipo', 'cantidad', 'total'
  ];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(
    private movementsService: MovementsService
  ) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.fetchMovements();
  }

  fetchMovements() {
    this.movementsService.getAllMovements()
    .subscribe((response: any) => {
      this.dataSource.data = response
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }
}

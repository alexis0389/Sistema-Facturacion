import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-detail-table',
  templateUrl: './bill-detail-table.component.html',
  styleUrls: ['./bill-detail-table.component.css']
})
export class BillDetailTableComponent implements OnInit {

  displayedColumns = ['id', 'facturaId', 'productoId', 'precio', 'cantidad'];

  constructor() {
    
  }

  ngOnInit(): void {
      
  }
}

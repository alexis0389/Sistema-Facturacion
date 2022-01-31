import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  displayedColumns = ['id', 'descripcion', 'cantidad', 'precio', 'descuento', 'iva', 'total', 'actions'];

  constructor() {
  }

  ngOnInit(): void {
      
  }
  
}

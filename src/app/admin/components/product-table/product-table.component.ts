import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/core/models/products.model';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {
  searchField: any;
  clearSearchField() {
    this.searchField = ''
  }

  products!: Product[];
  displayedColumns: string[] = ['id', 'nombre', 'categoria', 'precioUnitario', 'existencia', 'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts()
    .subscribe((response) => {
      this.dataSource.data = response;
    })
  }

  deleteProd(id: number) {
    this.productsService.deletedProduct(id)
    .subscribe(rta => {
      if (rta) {
        let index: number = 0;
        index = this.products.findIndex(product => product.id === id);
        this.products = [...this.products];
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }
}

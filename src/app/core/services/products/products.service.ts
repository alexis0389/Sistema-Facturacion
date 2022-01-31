import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { Product } from '../../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.urlAPI}/producto`)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.urlAPI}/producto/${id}`)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  createProduct(product: Product): Observable<Product[]> {
    return this.http.post<Product[]>(`${environment.urlAPI}/producto`, product, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  deletedProduct(id: number): Observable<Product[]> {
    return this.http.delete<Product[]>(`${environment.urlAPI}/producto/${id}`)
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Ocurrio un error:', error.error.message)
    } else {
      console.error(
        `Codigo devuelto del Backend ${error.status},` +
        `el cuerpo era: ${error.error}`
      )
    }
    return throwError('Algo malo sucedio; Por favor, inténtelo de nuevo o más tarde.')
  }
}

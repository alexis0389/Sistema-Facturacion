import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { Customer } from '../../models/customers.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(
    private http: HttpClient,
    
  ) { }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${environment.urlAPI}/Cliente`)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${environment.urlAPI}/Cliente/${id}`)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  createCustomer(customer: Customer): Observable<Customer[]> {
    return this.http.post<Customer[]>(`${environment.urlAPI}/Cliente`, customer, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  deleteCustomer(id: number): Observable<Customer[]> {
    return this.http.delete<Customer[]>(`${environment.urlAPI}/Cliente/${id}`, this.httpOptions)
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

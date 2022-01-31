import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { Bill } from '../../models/bills.model';

@Injectable({
  providedIn: 'root'
})
export class BillsService {

  constructor(private http: HttpClient) { }

  getAllBills(): Observable<Bill[]> {
    return this.http.get<Bill[]>(`${environment.urlAPI}/Factura`)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getBill(id: number): Observable<Bill> {
    return this.http.get<Bill>(`${environment.urlAPI}/Factura/${id}`)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
 
  createBill(bill: Bill): Observable<Bill[]> {
    return this.http.post<Bill[]>(`${environment.urlAPI}/Factura`, bill, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
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

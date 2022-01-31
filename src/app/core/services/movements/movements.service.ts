import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { Movement } from '../../models/movements.model';

@Injectable({
  providedIn: 'root'
})
export class MovementsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllMovements(): Observable<Movement[]> {
    return this.http.get<Movement[]>(`${environment.urlAPI}/Movimiento`)
    .pipe(retry(2),
      catchError(this.handleError)
    );
  }

  getMovement(id: number): Observable<Movement> {
    return this.http.get<Movement>(`${environment.urlAPI}/Movimiento/${id}`)
    .pipe(retry(2),
      catchError(this.handleError)
    );
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

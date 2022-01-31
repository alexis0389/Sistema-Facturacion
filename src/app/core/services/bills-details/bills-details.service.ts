import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BillDetail } from '../../models/bills-details.model';

@Injectable({
  providedIn: 'root'
})
export class BillsDetailsService {

  constructor(
    private http: HttpClient
  ) { }

}

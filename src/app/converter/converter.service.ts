import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Quote } from '../converter/models/quote';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  constructor(private http: HttpClient, private router: Router) { }

  getConverter(): Observable<any> {
    const urlEndpoint = 'http://data.fixer.io/api/latest?access_key=33b23d6e01efe285daf21f65e1124757';
    return this.http.get<Quote>(urlEndpoint);
  }
}

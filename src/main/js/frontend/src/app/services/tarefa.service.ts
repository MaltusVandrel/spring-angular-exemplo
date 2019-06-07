import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
    providedIn: 'root'
  })
export class TarefaService {

  constructor(private http: HttpClient) {
  }

  getPage(param:Object): Observable<any> {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post('//localhost:8080/grid', param, {headers : headers});
  }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map,tap } from 'rxjs/operators';
import { Tarefa } from '../model/tarefa.model';
import { Page } from '../model/page.ajax.model';

import { isNgTemplate } from '@angular/compiler';

  


@Injectable({providedIn: 'root'})
export class TarefaService {

  constructor(private http: HttpClient) {}
  
  getPage(param:Object): Observable<Page<Tarefa>> {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http
    .post<Page<Tarefa>>('//localhost:8080/grid', param, {headers : headers});
  }
}
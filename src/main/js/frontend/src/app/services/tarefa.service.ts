import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map,tap } from 'rxjs/operators';
import { Tarefa } from './tarefa.model';
import { isNgTemplate } from '@angular/compiler';

  

  export interface page<T> {
    content:T[];
    pageable:Object;//{"sort":[],"offset":0,"pageNumber":0,"pageSize":5,"paged":true,"unpaged":false}
    last:boolean;
    totalElements:number;
    totalPages:number;
    size:number;
    number:number;
    sort:Object[];
    numberOfElements:number;
    first:boolean;
  }

@Injectable({providedIn: 'root'})
export class TarefaService {




  constructor(private http: HttpClient) {
  }

  getPage(param:Object): Observable<Tarefa[]> {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let observable = this.http
    .post<page<Tarefa>>('//localhost:8080/grid', param, {headers : headers})
    .pipe(
      map((item:page<Tarefa>)=>{return item.content })
    );
    
    return observable;
  }
}
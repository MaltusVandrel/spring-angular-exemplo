import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {TarefaService} from '../services/tarefa.service';
import {DataTableTarefa} from './table-basic-example.datasource';
import { tap } from 'rxjs/operators';


/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.component.css'],
  templateUrl: 'table-basic-example.component.html',
  providers:  [ TarefaService ]
})
export class TableBasicExample implements OnInit{
  constructor(private tarefaService : TarefaService){}
 length:number=0;
   
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => {
      this.paginator.pageIndex = 0;
    });
    this.dataSource.paginator = this.paginator;
    this.paginator.page
        .pipe(
            tap(() => this.dataSource.refresh(),()=>{},()=>{
              length=this.dataSource.length;
            })
                        
        )
        .subscribe();
  }  
  
  displayedColumns: string[] = ['id', 'titulo', 'situacao'];
  dataSource = new DataTableTarefa(this.tarefaService,this.paginator,this.sort);
}

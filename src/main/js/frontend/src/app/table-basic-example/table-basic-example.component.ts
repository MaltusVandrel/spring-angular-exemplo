import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {TarefaService} from '../services/tarefa.service';
import {DataTableTarefa} from './table-basic-example.datasource';


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
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

   
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.tarefaService.getPage({perPage:5,page:0,object:{titulo:""},sort:{orders:[]}}).subscribe((data: any) => console.log(data));
  }
  displayedColumns: string[] = ['id', 'titulo', 'situacao'];
  dataSource = new DataTableTarefa(this.tarefaService);
}

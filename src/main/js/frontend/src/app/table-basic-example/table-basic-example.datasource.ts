import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map, timeout } from 'rxjs/operators';
import { Observable, of as observableOf, merge, BehaviorSubject } from 'rxjs';
import {TarefaService} from '../services/tarefa.service';
import {Tarefa,SituacaoTarefa} from '../model/tarefa.model';
import {Page} from '../model/page.ajax.model';
import {MatTableDataSource} from '@angular/material/table';


/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableTarefa extends MatTableDataSource<Tarefa> {
  data: Tarefa[] = [];
  private all: BehaviorSubject<Tarefa[]> = new BehaviorSubject([]);
  page:Page<Tarefa>;
  length:number=0;

  constructor(private tarefaService:TarefaService, paginator: MatPaginator, sort: MatSort){
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): BehaviorSubject<Tarefa[]> {
    this.refresh();
    return this.all;    
  }
  refresh():void{
    this.tarefaService.getPage({perPage:this.paginator.pageSize,page:this.paginator.pageIndex,object:{titulo:""},sort:{orders:[]}}).subscribe(data=>{
      this.page=data;
      this.data=data.content;
      this.all.next(data.content);
      this.length=this.page.totalElements;
    });
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */

}

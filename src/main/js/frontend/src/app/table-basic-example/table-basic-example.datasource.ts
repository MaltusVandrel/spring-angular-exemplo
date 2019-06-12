import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map, timeout } from 'rxjs/operators';
import { Observable, of as observableOf, merge, BehaviorSubject } from 'rxjs';
import {TarefaService} from '../services/tarefa.service';
import {Tarefa,SituacaoTarefa} from '../model/tarefa.model';
import {Page} from '../model/page.ajax.model';
import {MatTableDataSource} from '@angular/material/table';
import { MatMultiSort } from '../lib/mat-multi-sort.directive';

export class OrderAjax{
  direction:string;
  property:string;
}
export class SortAjax{
  orders:OrderAjax[];
  constructor(orders:OrderAjax[]){
    this.orders=orders;
  }
}
export class PageAjax{
  perPage:number;
  page:number;
  object:Object;
  sort:SortAjax;
  constructor(object:Object,page:number,perPage:number,orders:OrderAjax[]){
    this.object=object;
    this.page=page;
    this.perPage=perPage;
    this.sort=new SortAjax(orders);
  }  
}

export class DataTableTarefa extends MatTableDataSource<Tarefa> {
  data: Tarefa[] = [];
  private all: BehaviorSubject<Tarefa[]> = new BehaviorSubject([]);
  page:Page<Tarefa>;
  sort:MatMultiSort;
  constructor(private tarefaService:TarefaService, paginator: MatPaginator, sort: MatMultiSort){
    super();
  }
  connect(): BehaviorSubject<Tarefa[]> {
    this.refresh();
    return this.all;    
  }
  refresh():void{
    let page:PageAjax = new PageAjax(
      {titulo:""},
      this.paginator.pageIndex,
      this.paginator.pageSize,
      this.sort.actives.filter((property,index) => {
        let value:boolean=property!=undefined&&property!=""&&this.sort.directions[index]!=undefined&&this.sort.directions[index]!="";
        return value;
      }).map((property,index) => {
        let order:OrderAjax=new OrderAjax();
        order.property = property;
        order.direction = this.sort.directions[index].toUpperCase();
        return order;
      })
    );

    this.tarefaService.getPage(page).subscribe(page=>{
      this.page=page;
      this.all.next(page.content);
    });
  }
  disconnect() {}

}

import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import {TarefaService} from '../services/tarefa.service';
import {Tarefa,SituacaoTarefa} from '../services/tarefa.model';
import {MatTableDataSource} from '@angular/material/table';

// TODO: replace this with real data from your application
const EXAMPLE_DATA: Tarefa[] = [
  {id: 1, titulo: 'Aberta', descricao: "Teste Teste Teste",abertura:null,fechamento:null,situacao:SituacaoTarefa.ABERTA},
  {id: 2, titulo: 'Aberta', descricao: "Teste Teste Teste",abertura:null,fechamento:null,situacao:SituacaoTarefa.ABERTA},
  {id: 3, titulo: 'Aberta', descricao: "Teste Teste Teste",abertura:null,fechamento:null,situacao:SituacaoTarefa.ABERTA},
  {id: 4, titulo: 'Aberta', descricao: "Teste Teste Teste",abertura:null,fechamento:null,situacao:SituacaoTarefa.ABERTA},
  {id: 5, titulo: 'Aberta', descricao: "Teste Teste Teste",abertura:null,fechamento:null,situacao:SituacaoTarefa.ABERTA},
  {id: 6, titulo: 'Aberta', descricao: "Teste Teste Teste",abertura:null,fechamento:null,situacao:SituacaoTarefa.ABERTA}
];

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableTarefa extends MatTableDataSource<Tarefa> {
  data: Tarefa[] = EXAMPLE_DATA;

  constructor(private tarefaService:TarefaService){
  //,private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Tarefa[]> {

    return this.tarefaService.getPage({perPage:5,page:0,object:{titulo:""},sort:{orders:[]}});
    
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

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
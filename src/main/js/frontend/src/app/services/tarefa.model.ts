export enum SituacaoTarefa {
    ABERTA="ABERTA",ANDAMENTO="ANDAMENTO",CANCELADA="CANCELADA",CONCLUIDA="CONCLUIDA"
}

export interface Tarefa {
  id:number;
  titulo: string;
  descricao: string;
  abertura: Date;
  fechamento: Date;
  situacao: SituacaoTarefa;
}

  export interface Page<T> {
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
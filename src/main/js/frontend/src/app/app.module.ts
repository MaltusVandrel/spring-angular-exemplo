import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TableBasicExample } from './table-basic-example/table-basic-example.component';
import { FullMaterialModule } from './material-module';



import { TarefaService } from './services/tarefa.service';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FullMaterialModule,
    HttpClient, HttpHeaders,
    RouterModule.forRoot([
      { path: '', component: TableBasicExample },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    TableBasicExample
  ],
  providers:[ TarefaService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
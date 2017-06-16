import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms'

import { AppComponent }  from './app.component';
import {productlistcomponent} from './products/product-list.component'
import {ProductFilterPipe} from './products/product-filter.pipe'


@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule
   ],
  declarations: [
     AppComponent,
      productlistcomponent ,
      ProductFilterPipe
    ], //class name   
  bootstrap: [ AppComponent ]
})
export class AppModule { }

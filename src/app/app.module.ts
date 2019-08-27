import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms'
import { CaloriesComponent } from './calories/calories.component';
import { ProductMenu } from './product-menu/product-menu.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ProductItem } from './product-menu/product-item/product-item.component';



@NgModule({
  declarations: [
    AppComponent,
    CaloriesComponent,
    ProductMenu,
    ProductItem
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule  
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

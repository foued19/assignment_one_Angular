import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { MenuComponent } from './menu/menu.component';
import { MatListModule } from '@angular/material/list';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({

  declarations: [
    AppComponent,
    DishdetailComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	  BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
	  MatGridListModule,
    MatCardModule,
    MatButtonModule
		
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

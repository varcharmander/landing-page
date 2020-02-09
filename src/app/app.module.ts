import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { NameComponent } from './name/name.component';

@NgModule({
   declarations: [
      AppComponent,
      NameComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ScullyLibModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

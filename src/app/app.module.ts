import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { NameComponent } from './name/name.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';

@NgModule({
   declarations: [
      AppComponent,
      NameComponent,
      HeaderComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ScullyLibModule,
      NgbModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

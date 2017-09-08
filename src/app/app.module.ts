import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app.routing.module';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';
import { DetailComponent } from './detail/detail.component';

import { ListService } from './list/list.service';
import { DetailService } from './detail/detail.service';
import { SearchService } from './search/search.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SearchComponent,
    DetailComponent,
    routedComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    ListService,
    DetailService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

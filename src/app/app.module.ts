import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListClientComponent } from './list-clients/list-clients.component';
import { ListComptesComponent } from './list-comptes/list-comptes.component';
import { ViewListClientsComponent } from './view-list-clients/view-list-clients.component';
import { ViewListComptesComponent } from './view-list-comptes/view-list-comptes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListClientComponent,
    ListComptesComponent,
    ViewListClientsComponent,
    ViewListComptesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

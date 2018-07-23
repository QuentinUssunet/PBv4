import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListClientComponent } from './list-clients/list-clients.component';
import { ListComptesComponent } from './list-comptes/list-comptes.component';
import { ViewListClientsComponent } from './view-list-clients/view-list-clients.component';
import { ViewListComptesComponent } from './view-list-comptes/view-list-comptes.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '../../node_modules/@angular/forms';
import { RouterModule } from '../../node_modules/@angular/router';
import { ROUTES } from 'routes';

@NgModule({
  declarations: [
    AppComponent,
    ListClientComponent,
    ListComptesComponent,
    ViewListClientsComponent,
    ViewListComptesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

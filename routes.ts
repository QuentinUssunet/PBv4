import { Routes } from '@angular/router'
import { ViewListClientsComponent } from 'src/app/view-list-clients/view-list-clients.component';
import { ViewListComptesComponent } from 'src/app/view-list-comptes/view-list-comptes.component';
import { LoginComponent } from 'src/app/login/login.component';

export const ROUTES: Routes=[
    { path: 'clients', component: ViewListClientsComponent },
    { path: 'comptes', component: ViewListComptesComponent },
    { path: '', component: LoginComponent }
]
import { CarroListComponent } from './../carro/carro-list/carro-list.component';
import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component'
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CarroComponent } from '../carro/carro.component';
import { CarroAddComponent } from '../carro/carro-add.component';
import { RouteGuard } from '../guards/route.guard';
import { SaveFormGuard } from '../guards/save-form.guard';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [RouteGuard] },
  { path: 'carros', component: CarroComponent, canActivate: [RouteGuard] },
  { path: 'carros-add', component: CarroAddComponent, canActivate: [RouteGuard], canDeactivate: [SaveFormGuard] },
  { path: 'carros-list', component: CarroListComponent, canActivate: [RouteGuard] },
  { path: '**', component: PageNotFoundComponent }
];

import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component'
import { DashboardComponent } from '../dashboard/dashboard.component';

export const appRoutes: Routes = [

    {path:'', component: HomeComponent},
    {path:'dashboard', component: DashboardComponent},
    {path:'**', component: PageNotFoundComponent}
    
    
  ];
  
import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ApplicationComponent } from './pages/application/application.component';

export const routes: Routes = [
    {
        path: 'dashboard' ,
        component: DashboardComponent
    },
    {
        path: 'application' ,
        component: ApplicationComponent
    },
];

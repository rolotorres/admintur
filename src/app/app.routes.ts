import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { GraficasComponent } from './pages/graficas/graficas.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PagesComponent } from './pages/pages.component';


const appRoutes: Routes = [
    {
        path: '', component: PagesComponent, children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'graficas', component: GraficasComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }]
    },

    { path: 'login', component: LoginComponent },
    { path: 'register', component: LoginComponent },

    { path: '**', component: PagenotfoundComponent },
]

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });

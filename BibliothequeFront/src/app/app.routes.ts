import { Routes } from '@angular/router';
import { LivreComponent } from './components/livre/livre.component';
import { HomeComponent } from './components/home/home.component';
import { CreditComponent } from './components/credit/credit.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/home'},
    {path: 'home', component: HomeComponent},
    {path: 'livres', component: LivreComponent},
    {path: 'credit', component: CreditComponent},
    {path: 'logIn', component: AuthenticationComponent},
    {path: '**', redirectTo: '/'}
];

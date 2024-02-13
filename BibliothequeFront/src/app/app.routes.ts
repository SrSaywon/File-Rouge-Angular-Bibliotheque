import { Routes } from '@angular/router';
import { LivreComponent } from './components/livre/livre.component';
import { HomeComponent } from './components/home/home.component';
import { CreditComponent } from './components/credit/credit.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import {SupprimerLivreComponent} from "./components/gestionLivres/supprimer-livre/supprimer-livre.component";
import {ModifierLivreComponent} from "./components/gestionLivres/modifier-livre/modifier-livre.component";
import {AjouterLivreComponent} from "./components/gestionLivres/ajouter-livre/ajouter-livre.component";
import { ListAuteurComponent } from './components/gestionAuteurs/list-auteur/list-auteur.component';
import { AjouterAuteurComponent } from './components/gestionAuteurs/ajouter-auteur/ajouter-auteur.component';


export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/home'},
    {path: 'home', component: HomeComponent},
    {path: 'credit', component: CreditComponent},
    {path: 'logIn', component: AuthenticationComponent},
    {path: 'auteurs', component: ListAuteurComponent},
    {path: 'ajouter-auteurs', component: AjouterAuteurComponent},
    {path: '**', redirectTo: '/'}
];

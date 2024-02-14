import { Routes } from '@angular/router';
import { LivreComponent } from './components/gestionLivres/livre/livre.component';
import { HomeComponent } from './components/home/home.component';
import { CreditComponent } from './components/credit/credit.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import {SupprimerLivreComponent} from "./components/gestionLivres/supprimer-livre/supprimer-livre.component";
import {ModifierLivreComponent} from "./components/gestionLivres/modifier-livre/modifier-livre.component";
import { AjouterLivresComponent } from './components/gestionLivres/ajouter-livres/ajouter-livres.component';
import { ListAuteurComponent } from './components/gestionAuteurs/list-auteur/list-auteur.component';
import { AjouterAuteurComponent } from './components/gestionAuteurs/ajouter-auteur/ajouter-auteur.component';
import {MenuLivreComponent} from "./components/gestionLivres/menu-livre/menu-livre.component";
import { LivreDetailleComponent } from './components/gestionLivres/livre-detaille/livre-detaille.component';


export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/home'},
    {path: 'home', component: HomeComponent},
    {path: 'credit', component: CreditComponent},
    {path: 'logIn', component: AuthenticationComponent},
    {path: 'menu-livres',
      component: MenuLivreComponent,
      children:[
        {path: 'livres/:id', 
          component: LivreDetailleComponent},
        {path: 'supprimer/:id',
          component: SupprimerLivreComponent},
        {path: 'modifier/:id',
          component: ModifierLivreComponent},
        {path: 'livres',
          component: LivreComponent},
        {path:'ajouter',
          component: AjouterLivresComponent}]},
    {path: 'auteurs', component: ListAuteurComponent},
    {path: 'ajouter-auteurs', component: AjouterAuteurComponent},
    {path: '**', redirectTo: '/'}
];

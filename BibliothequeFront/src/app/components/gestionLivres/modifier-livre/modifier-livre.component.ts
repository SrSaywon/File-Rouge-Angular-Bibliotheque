import { Component, OnDestroy, OnInit } from '@angular/core';
import { Livre } from '../../../Models/livre';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButton, MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { LivreService } from '../../../services/livre.service';
import {MatSelectModule} from '@angular/material/select';
import { AuteurService } from '../../../services/auteur.service';
import { DomaineService } from '../../../services/domaine.service';
import { Observable } from 'rxjs';
import { Domaine } from '../../../Models/domaine';
import { Auteur } from '../../../Models/auteur';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-modifier-livre',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule, MatButton, FormsModule, ReactiveFormsModule, MatButton, MatIcon, MatFabButton, MatSelectModule, AsyncPipe, NgFor, NgIf],
  templateUrl: './modifier-livre.component.html',
  styleUrl: './modifier-livre.component.css'
})
export class ModifierLivreComponent implements OnInit , OnDestroy{

  id!:number;
  livre!:Livre;
  private sub:any;
  private sub2:any;
  
  selectedAuteur = this.livre.auteur.nom;
  selectedDomaine = this.livre.domaine.nom;

  domaines$: Observable<Domaine[]> = this.domaineService.getAll();
  auteurs$: Observable<Auteur[]> = this.auteurService.getAll();

  ajouterLivresForm = new FormGroup({
    nom: new FormControl(`${this.livre.titre}`),
    nbPages: new FormControl(`${this.livre.nbPages}`),
    auteurId: new FormControl(`${this.livre.auteur.nom}`),
    domaineId : new FormControl(`${this.livre.domaine.nom}`)
  });
    constructor(private route : ActivatedRoute, private livreService:LivreService,private router: Router,  private auteurService: AuteurService, private domaineService: DomaineService ){}
    


    ngOnInit(){
      this.sub = this.route.params.subscribe(params =>{
        this.id = +params['id'];
      });
      this.sub2 = this.livreService.getById(this.id).subscribe(livre => {this.livre = livre;console.log(JSON.stringify(this.livre));});
      console.log(JSON.stringify(this.livre));
    }
  
    ngOnDestroy(){
      this.sub.unsubscribe();
      this.sub2.unsubscribe();
    }
    retour(){
      this.router.navigate(["auteurs"]);
    }

    redAddDomaineBtn() {
      this.router.navigate(["ajouter-auteurs"]);
    }
    redAddAuthorBtn() {
      this.router.navigate(["ajouter-auteurs"]);
    }
    onClickButton(){
  
    }
}

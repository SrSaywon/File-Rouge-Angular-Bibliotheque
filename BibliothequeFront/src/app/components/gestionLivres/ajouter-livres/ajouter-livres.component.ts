import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';
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
  selector: 'app-ajouter-livres',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule, MatButton, FormsModule, ReactiveFormsModule, MatButton, MatIcon, MatFabButton, MatSelectModule, AsyncPipe, NgFor, NgIf],
  templateUrl: './ajouter-livres.component.html',
  styleUrl: './ajouter-livres.component.css'
})
export class AjouterLivresComponent {

  constructor(private route: Router, private livreService: LivreService, private auteurService: AuteurService, private domaineService: DomaineService) {}

  domaines$: Observable<Domaine[]> = this.domaineService.getAll();
  auteurs$: Observable<Auteur[]> = this.auteurService.getAll();

  selected = '';
  
  ajouterLivresForm = new FormGroup({
    titre: new FormControl(''),
    nbPages: new FormControl(''),
    auteur: new FormControl(''),
    domaine: new FormControl('')
  });
  
  onClickButton() {
    const newLivre: any= {
      titre: `${this.ajouterLivresForm.value.titre}`,
      nbPages: `${this.ajouterLivresForm.value.nbPages}`,
      auteurId: `${this.ajouterLivresForm.value.auteur}`,
      domaineId: `${this.ajouterLivresForm.value.domaine}`
    }
    this.livreService.addLivre(newLivre).subscribe(livre => console.log("finis:", livre));
    this.route.navigate(['menu-livres/livres'])
  }

  retour() {
    this.route.navigate(['menu-livres/livres']);
  }

  redAddDomaineBtn() {
    this.route.navigate(["ajouter-auteurs"]);
  }
  redAddAuthorBtn() {
    this.route.navigate(["ajouter-auteurs"]);
  }
  
}

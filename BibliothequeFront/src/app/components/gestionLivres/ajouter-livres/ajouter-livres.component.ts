import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';
import { MatButton, MatFabButton } from '@angular/material/button';
import { Auteur } from '../../../Models/auteur';
import { MatIcon } from '@angular/material/icon';
import { LivreService } from '../../../services/livre.service';

@Component({
  selector: 'app-ajouter-livres',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule, MatButton, FormsModule, ReactiveFormsModule, MatButton, MatIcon, MatFabButton],
  templateUrl: './ajouter-livres.component.html',
  styleUrl: './ajouter-livres.component.css'
})
export class AjouterLivresComponent {

  constructor(private route: Router, private livreService: LivreService) {}

  
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

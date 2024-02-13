import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-ajouter-auteur',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule],
  templateUrl: './ajouter-auteur.component.html',
  styleUrl: './ajouter-auteur.component.css'
})
export class AjouterAuteurComponent {
  ajouterAutheurForm = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    email: new FormControl(''),
    telephone: new FormControl(''), 
  });

  onClickButton() {

  }
}

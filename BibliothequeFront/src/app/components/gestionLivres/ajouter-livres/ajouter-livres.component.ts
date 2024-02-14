import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';
import { MatButton, MatFabButton } from '@angular/material/button';
import { Auteur } from '../../../Models/auteur';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-ajouter-livres',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule, MatButton, FormsModule, ReactiveFormsModule, MatButton, MatIcon, MatFabButton],
  templateUrl: './ajouter-livres.component.html',
  styleUrl: './ajouter-livres.component.css'
})
export class AjouterLivresComponent {

  ajouterAutheurForm = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    email: new FormControl('')
  });
  
onClickButton() {
throw new Error('Method not implemented.');
}
retour() {
throw new Error('Method not implemented.');
}

}

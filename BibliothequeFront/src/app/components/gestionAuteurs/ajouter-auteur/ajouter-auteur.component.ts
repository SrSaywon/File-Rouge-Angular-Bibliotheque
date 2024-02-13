import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';
import { MatButton, MatFabButton } from '@angular/material/button';
import { AuteurService } from '../../../services/auteur.service';
import { Auteur } from '../../../Models/auteur';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-ajouter-auteur',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule, MatButton, FormsModule, ReactiveFormsModule, MatButton, MatIcon, MatFabButton],
  templateUrl: './ajouter-auteur.component.html',
  styleUrl: './ajouter-auteur.component.css'
})
export class AjouterAuteurComponent {
  
  ajouterAutheurForm = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    email: new FormControl('')
  });

  constructor(private auteurService:AuteurService,private router:Router){

  }
  onClickButton() {
    const newAuteur:any= {
      nom:`${this.ajouterAutheurForm.value.nom}`, 
      prenom:`${this.ajouterAutheurForm.value.prenom}`, 
      email:`${this.ajouterAutheurForm.value.email}`
    }
    this.auteurService
      .addAuteur(newAuteur)
      .subscribe(auteur => console.log("finis:",auteur));
    
      this.router.navigate(["auteurs"]);
  }

  retour(){
    this.router.navigate(["auteurs"]);
  }
}

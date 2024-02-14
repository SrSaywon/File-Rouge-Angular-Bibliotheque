import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuteurService } from '../../../services/auteur.service';
import { Auteur } from '../../../Models/auteur';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButton, MatFabButton } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-modifier-auteur',
  standalone: true,
  imports: [UpperCasePipe, MatInputModule,MatFormFieldModule, MatButton, FormsModule, ReactiveFormsModule, MatButton, MatIcon, MatFabButton],
  templateUrl: './modifier-auteur.component.html',
  styleUrl: './modifier-auteur.component.css'
})
export class ModifierAuteurComponent implements OnDestroy, OnInit {
 id!:number;
 auteur!:Auteur;
 private sub:any;
 modifierAutheurForm = new FormGroup({
  nom: new FormControl(`${this.auteur.nom}`),
  prenom: new FormControl(`${this.auteur.prenom}`),
  email: new FormControl(`${this.auteur.email}`),
  telephone : new FormControl(`${this.auteur.telephone}`)
});
  constructor(private route : ActivatedRoute, private service:AuteurService,private router: Router ){}
  ngOnInit(){
    this.sub = this.route.params.subscribe(params =>{
      this.id = +params['id'];
    });
    this.service.getById(this.id).subscribe(auteur => {this.auteur = auteur;console.log(JSON.stringify(this.auteur));});
    console.log(JSON.stringify(this.auteur));
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
  retour(){
    this.router.navigate(["auteurs"]);
  }
  onClickButton(){

  }
}

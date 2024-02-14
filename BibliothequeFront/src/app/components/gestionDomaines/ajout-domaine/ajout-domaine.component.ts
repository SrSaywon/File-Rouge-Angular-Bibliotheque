import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { MatButton, MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { DomaineService } from '../../../services/domaine.service';

@Component({
  selector: 'app-ajout-domaine',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule, MatButton, FormsModule, ReactiveFormsModule, MatButton, MatIcon, MatFabButton],
  templateUrl: './ajout-domaine.component.html',
  styleUrl: './ajout-domaine.component.css'
})
export class AjoutDomaineComponent implements OnDestroy {

  ajouterDomaineForm = new FormGroup({
    nom: new FormControl(''),
    description: new FormControl('')
  });

  sub: any;

  constructor(private domaineService: DomaineService, private route: Router){}
  
  retour() {
    this.route.navigate(["domaine"])
  }
  onClickButton() {
    const newDomaine: any ={
      nom:`${this.ajouterDomaineForm.value.nom}`,
      description:`${this.ajouterDomaineForm.value.description}`
    }
    this.sub = this.domaineService.AddDomaine(newDomaine).subscribe(domaine => console.log("finis", domaine));
    this.route.navigate(["domaine"])
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

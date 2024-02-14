import { Component, OnDestroy } from '@angular/core';
import { Auteur } from '../../../Models/auteur';
import { AuteurService } from '../../../services/auteur.service';
import { Observable } from 'rxjs';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterOutlet } from '@angular/router';
import { MatFabButton, MatIconButton } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import {MatChipsModule} from '@angular/material/chips';
@Component({
  selector: 'app-list-auteur',
  standalone: true,
  imports: [MatIcon, RouterOutlet, MatFabButton,MatCard, NgIf, NgFor, MatCardHeader,MatCardTitle, AsyncPipe, MatCardContent, MatChipsModule, MatIconButton],
  templateUrl: './list-auteur.component.html',
  styleUrl: './list-auteur.component.css'
})
export class ListAuteurComponent{
  auteurs$: Observable<Auteur[]> = this.auteurService.getAll();
  private sub:any;
  constructor(private auteurService:AuteurService, private router : Router){}

  addAuteur():void{
    this.router.navigate(["ajouter-auteurs"]);
  }
  deleteAuteur(id:number|null){
    if(confirm("Etes vous sur?") && id != null){
      this.sub =this.auteurService.deleteAuteur(id).subscribe();
      console.log("here");
      this.router.navigate(["auteurs"]);
    }
  }
  
  editeAuteur(id:number|null){
    const path:string =`modifier-auteur/${id}` 
    this.router.navigate([path]);
  }
}

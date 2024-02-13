import { Component } from '@angular/core';
import { Auteur } from '../../../Models/auteur';
import { AuteurService } from '../../../services/auteur.service';
import { Observable } from 'rxjs';
import { MatIcon } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-list-auteur',
  standalone: true,
  imports: [MatIcon, RouterOutlet],
  templateUrl: './list-auteur.component.html',
  styleUrl: './list-auteur.component.css'
})
export class ListAuteurComponent {
  auteurs$: Observable<Auteur[]> = this.auteurService.getAll();

  constructor(private auteurService:AuteurService){}
}

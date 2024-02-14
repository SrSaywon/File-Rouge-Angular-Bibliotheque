import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterOutlet } from '@angular/router';
import { MatFabButton, MatIconButton } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import {MatChipsModule} from '@angular/material/chips';
import { DomaineService } from '../../../services/domaine.service';
import { Domaine } from '../../../Models/domaine';

@Component({
  selector: 'app-liste-domaine',
  standalone: true,
  imports: [MatIcon, RouterOutlet, MatFabButton,MatCard, NgIf, NgFor, MatCardHeader,MatCardTitle, AsyncPipe, MatCardContent, MatChipsModule, MatIconButton],
  templateUrl: './liste-domaine.component.html',
  styleUrl: './liste-domaine.component.css'
})
export class ListeDomaineComponent {

  constructor(private route : Router, private domaineService: DomaineService) {}

  domaine$ : Observable<Domaine[]> = this.domaineService.getAll();

  addDomaine() {
    this.route.navigate(["ajouter-domaine"])
  }

}

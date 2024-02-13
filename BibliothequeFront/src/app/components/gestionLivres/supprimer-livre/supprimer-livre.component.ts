import { Component } from '@angular/core';
import {
  MatCard,
  MatCardHeader,
} from "@angular/material/card";
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-supprimer-livre',
  standalone: true,
  imports: [  MatCard,
    MatCardHeader,
    MatButtonModule],
  templateUrl: './supprimer-livre.component.html',
  styleUrl: './supprimer-livre.component.css'
})

export class SupprimerLivreComponent {

  Delete() {

  }
}

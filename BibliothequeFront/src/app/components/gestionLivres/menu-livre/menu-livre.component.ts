import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {Livre} from "../../../Models/livre";
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatChipsModule} from '@angular/material/chips';
@Component({
  selector: 'app-menu-livre',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    MatButtonModule,
    MatSidenavModule,
    MatChipsModule
  ],
  templateUrl: './menu-livre.component.html',
  styleUrl: './menu-livre.component.css'
})
export class MenuLivreComponent {
  currentLivre : Livre | null = null;
  showFiller: boolean = false;
}

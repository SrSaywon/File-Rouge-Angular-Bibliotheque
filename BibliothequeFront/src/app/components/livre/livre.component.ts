import { Component } from '@angular/core';
import { RechercheLivreComponent } from "../gestionLivres/recherche-livre/recherche-livre.component";
import { AjouterLivreComponent } from "../gestionLivres/ajouter-livre/ajouter-livre.component";
import { Observable } from 'rxjs';
import { Livre } from '../../Models/livre';
import { LivreService } from '../../services/livre.service';
import {
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardFooter,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle
} from "@angular/material/card";
import {AsyncPipe, DatePipe, NgForOf, NgIf, UpperCasePipe} from "@angular/common";
import {MatButtonModule} from '@angular/material/button';

@Component({
    selector: 'app-livre',
    standalone: true,
    templateUrl: './livre.component.html',
    styleUrl: './livre.component.css',
    imports: [RechercheLivreComponent,
        AjouterLivreComponent,
        MatCard,
        MatCardActions,
        MatCardContent,
        MatCardFooter,
        MatCardHeader,
        MatCardSubtitle,
        MatCardTitle,
        MatButtonModule,
        AsyncPipe, DatePipe, NgForOf, NgIf, UpperCasePipe]
})
export class LivreComponent {
    constructor(private livreService: LivreService) {
    }

    livres$: Observable<Livre[]> = this.livreService.getAll();

}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RechercheLivreComponent } from "../recherche-livre/recherche-livre.component";
import { Observable } from 'rxjs';
import { Livre } from '../../../Models/livre';
import { LivreService } from '../../../services/livre.service';

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
import { Router } from '@angular/router';


@Component({
    selector: 'app-livre',
    standalone: true,
    templateUrl: './livre.component.html',
    styleUrl: './livre.component.css',

    imports: [RechercheLivreComponent,
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
    constructor(private livreService: LivreService, private router: Router) {
    }

    livres$: Observable<Livre[]> = this.livreService.getAll();

    @Output() selectLivre = new EventEmitter<Livre>


    setCurrentLivre(l: Livre): any {
        let path: string = `menu-livres/livres/${l.id}`
        this.router.navigate([path])
    }

    EditCurrentLivre(l: Livre): any {
        let path: string = `menu-livres/modifier/${l.id}`
        this.router.navigate([path])
    }

    DeleteCurrentLivre(l: Livre): any {
        let path: string = `menu-livres/supprimer/${l.id}`
        this.router.navigate([path])
    }
}

import { Component } from '@angular/core';
import { RechercheLivreComponent } from "../gestionLivres/recherche-livre/recherche-livre.component";
import { AjouterLivreComponent } from "../gestionLivres/ajouter-livre/ajouter-livre.component";
import { Observable } from 'rxjs';
import { Livre } from '../../Models/livre';
import { LivreService } from '../../services/livre.service';

@Component({
    selector: 'app-livre',
    standalone: true,
    templateUrl: './livre.component.html',
    styleUrl: './livre.component.css',
    imports: [RechercheLivreComponent, AjouterLivreComponent]
})
export class LivreComponent {
    constructor(private livreService: LivreService) {

    }

    livres$: Observable<Livre[]> = this.livreService.getAll();

}

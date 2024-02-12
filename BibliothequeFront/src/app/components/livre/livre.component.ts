import { Component } from '@angular/core';
import { RechercheLivreComponent } from "../gestionLivres/recherche-livre/recherche-livre.component";
import { AjouterLivreComponent } from "../gestionLivres/ajouter-livre/ajouter-livre.component";

@Component({
    selector: 'app-livre',
    standalone: true,
    templateUrl: './livre.component.html',
    styleUrl: './livre.component.css',
    imports: [RechercheLivreComponent, AjouterLivreComponent]
})
export class LivreComponent {

}

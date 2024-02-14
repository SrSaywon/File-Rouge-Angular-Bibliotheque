import { Component } from '@angular/core';
import {
  MatCard,
  MatCardHeader,
} from "@angular/material/card";
import {MatButtonModule} from '@angular/material/button';
import { LivreService } from '../../../services/livre.service';
import { ActivatedRoute, Router } from '@angular/router';


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

  id!: number;
  private sub: any;

  constructor(private route: ActivatedRoute, private livreService: LivreService, private router: Router) {}
  
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  Delete() {
    this.livreService.deleteById(this.id).subscribe();
    this.router.navigate(['menu-livres/livres'])
  }
}

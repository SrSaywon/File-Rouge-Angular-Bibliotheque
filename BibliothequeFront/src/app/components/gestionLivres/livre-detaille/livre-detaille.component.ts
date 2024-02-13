import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LivreService } from '../../../services/livre.service';
import { Livre } from '../../../Models/livre';

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
import { Observable } from 'rxjs';

@Component({
  selector: 'app-livre-detaille',
  standalone: true,
  imports: [MatCard,
    MatCardActions,
    MatCardContent,
    MatCardFooter,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatButtonModule,
    AsyncPipe, DatePipe, NgForOf, NgIf, UpperCasePipe],
  templateUrl: './livre-detaille.component.html',
  styleUrl: './livre-detaille.component.css'
})
export class LivreDetailleComponent {
  id!: number;
  private sub: any;

  constructor(private route: ActivatedRoute, private livreService: LivreService) {}
  
  livreUnique!: Livre;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.livreService.getById(this.id).subscribe( livreUnique => this.livreUnique = livreUnique)
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

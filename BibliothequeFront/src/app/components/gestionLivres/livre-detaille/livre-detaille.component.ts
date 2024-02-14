
import { Component, OnDestroy, OnInit } from '@angular/core';

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

export class LivreDetailleComponent implements OnDestroy, OnInit{

  id!: number;
  private sub: any;
  private sub2: any;

  constructor(private route: ActivatedRoute, private livreService: LivreService) {}


  livreUnique!: Livre;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
    this.id = +params['id'];
    
  });
  this.sub2 = this.livreService.getById(this.id).subscribe( livreUnique => {this.livreUnique =livreUnique; console.log("passage");});
  
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
  }
}

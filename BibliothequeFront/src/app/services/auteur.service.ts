import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BASE_API_URL } from '../constants/injection';
import { Observable } from 'rxjs';
import { Auteur } from '../Models/auteur';

@Injectable({
  providedIn: 'root'
})
export class AuteurService {

  constructor(private http: HttpClient, @Inject(BASE_API_URL) private baseUrl: string) { 
  }

  getAll(): Observable<Auteur[]> {
    return this.http.get<Auteur[]>(`${this.baseUrl}/Auteurs`);
  }
  
}

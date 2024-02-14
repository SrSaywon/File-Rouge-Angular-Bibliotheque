import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BASE_API_URL } from '../constants/injection';
import { Observable, catchError } from 'rxjs';
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
  
  /** POST: add a new hero to the database */
  addAuteur(auteur: Auteur): Observable<Auteur> {
    return this.http.post<Auteur>(`${this.baseUrl}/Auteurs`, auteur);
  }
  
  deleteAuteur(id:number){
    return this.http.delete<Auteur>(`${this.baseUrl}/Auteurs/${id}`);
  }
  getById(id: number): Observable<Auteur> {
    return this.http.get<Auteur>(`${this.baseUrl}/Auteurs/${id}`)
  }

}

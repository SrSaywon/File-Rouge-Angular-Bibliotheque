import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BASE_API_URL } from '../constants/injection';
import { Observable } from 'rxjs';
import { Livre } from '../Models/livre';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  constructor(private http: HttpClient, @Inject(BASE_API_URL) private baseUrl: string) {
  }

  getAll(): Observable<Livre[]> {
    //return this.http.get<Livre[]>(`${this.baseUrl}/Livres`);
    return this.http.get<Livre[]>(this.baseUrl + '/Livres');
  }

  getById(id: number): Observable<Livre> {
    return this.http.get<Livre>(`${this.baseUrl}/Livres/${id}`)
  }

  deleteById(id: number) {
    return this.http.delete<Livre>(`${this.baseUrl}/Livres/${id}`)
  }

  addLivre(livre: Livre): Observable<Livre> {
    return this.http.post<Livre>(`${this.baseUrl}/Livres`, livre);
  }

  ModifierById(id: number, livre: Livre): Observable<Livre> {
    return this.http.put<Livre>(`${this.baseUrl}/Livres/${id}` , livre)
  }
}

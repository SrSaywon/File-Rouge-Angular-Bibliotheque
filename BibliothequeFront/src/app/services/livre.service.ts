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
}

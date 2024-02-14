import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BASE_API_URL } from '../constants/injection';
import { Observable } from 'rxjs';
import { Domaine } from '../Models/domaine';

@Injectable({
  providedIn: 'root'
})
export class DomaineService {

  constructor(private http: HttpClient, @Inject(BASE_API_URL) private baseUrl: string ) { }

  getAll(): Observable<Domaine[]> {
    return this.http.get<Domaine[]>(`${this.baseUrl}/Domaines`)
  }

  AddDomaine(domaine : Domaine): Observable<Domaine> {
    return this.http.post<Domaine>(`${this.baseUrl}/Domaines`, domaine)
  }
}

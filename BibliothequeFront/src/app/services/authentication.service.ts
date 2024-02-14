import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BASE_API_URL} from "../constants/injection";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  response: string="";

  constructor(private http: HttpClient, @Inject(BASE_API_URL)private baseUrl: string) { }

  login(username: string, password: string): Observable<any>{
    return this.http.post<string>(`${this.baseUrl}/Admins/login`, {"prenom" : "test", "nom": "test","userName" : username, "motDePasse": password});
  }

  isLogged(): boolean{
    let token: string | null = localStorage.getItem('token');
    return token !=null && token !="";
  }

  getToken(): string | null {
    if (! localStorage.getItem('token') || localStorage.getItem('token') == ""){
      return null;
    }
    return JSON.parse(localStorage.getItem('token')!)['access_token']
  }

  logOut(){
    localStorage.setItem('token', "");
  }

}

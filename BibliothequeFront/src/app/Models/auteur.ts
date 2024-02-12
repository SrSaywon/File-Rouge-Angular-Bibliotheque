import { Livre } from "./livre";

export interface Auteur {
    id : number;
    nom : string;
    prenom: string;
    email: string;
    telephone: string; 
    grade: string;
    livres: Livre[];
}

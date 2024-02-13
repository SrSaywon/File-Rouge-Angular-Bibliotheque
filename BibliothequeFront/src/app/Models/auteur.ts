import { Livre } from "./livre";

export interface Auteur {
    id : number | null;
    nom : string;
    prenom: string;
    email: string;
    telephone: string|null; 
    grade: string | null;
    livres: Livre[] | null;
}

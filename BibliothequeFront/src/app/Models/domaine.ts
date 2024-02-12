import { Livre } from "./livre";

export interface Domaine {
    Id: number;
    Nom: string;
    Description: string;
    Livres: Livre[];
}

import { Lecteur } from "./lecteur";
import { Livre } from "./livre";

export interface Emprunt {
    id: number;
    dateEmprunt: Date;
    dateRetour: Date;
    livre: Livre;
    lecteur: Lecteur;
}

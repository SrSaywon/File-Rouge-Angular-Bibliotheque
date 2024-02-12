import { Auteur } from "./auteur";
import { Domaine } from "./domaine";
import { Emprunt } from "./emprunt";
import { Etat } from "./etat";

export interface Livre {
    id: number;
    titre: string;
    nbPages: number;
    domaine: Domaine;
    auteur: Auteur;
    emprunts: Emprunt[];
    etatLivre: Etat.DISPONIBLE;
}

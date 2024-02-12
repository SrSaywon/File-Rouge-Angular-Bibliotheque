import { Auteur } from "./auteur";
import { Domaine } from "./domaine";
import { Emprunt } from "./emprunt";
import { Etat } from "./etat";

export interface Livre {
    Id: number;
    Titre: string;
    NbPages: number;
    Domaine: Domaine;
    Auteur: Auteur;
    Emprunts: Emprunt[];
    EtatLivre: Etat.DISPONIBLE;
}

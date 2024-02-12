import { Lecteur } from "./lecteur";

export interface Adresse {
    Id: number;
    Appartement: string;
    Rue: string;
    Ville: string;
    ZipCode: string;
    Pays: string;
    Lecteurs: Lecteur;
}

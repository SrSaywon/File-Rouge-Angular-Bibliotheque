import { Lecteur } from "./lecteur";

export interface Adresse {
    id: number;
    appartement: string;
    rue: string;
    ville: string;
    zipCode: string;
    pays: string;
    lecteurs: Lecteur;
}

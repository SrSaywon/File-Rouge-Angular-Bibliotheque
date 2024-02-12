import { Livre } from "./livre";

export interface Domaine {
    id: number;
    nom: string;
    description: string;
    livres: Livre[];
}

import { SeancesModel } from "./SeancesModel";
import { InformationsModel } from "./InformationModel";

export class FilmModel {
    id: number;
    duree: number;
    titre: string;
    titreOriginal: string;
    visa: string;
    informations: Array<InformationsModel>;
    seances: Array<SeancesModel>;


}

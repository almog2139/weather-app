import { AdministrativeArea } from "./administrative-area";
import { Country } from "./country";

export interface City{
AdministrativeArea: AdministrativeArea,
Country:Country ,
Key: string,
LocalizedName: string,
Rank: number,
Type: string,
Version: number
}

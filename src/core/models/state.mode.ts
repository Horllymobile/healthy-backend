import { CityModel } from './city.model';
import { CountryModel } from './country.model';

export interface StateModel {
  id: number;
  name: string;
  code: string;
  country?: CountryModel | number;
  cities: CityModel[];
}

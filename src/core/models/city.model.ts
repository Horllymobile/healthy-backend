import { StateModel } from './state.mode';

export interface CityModel {
  id: number;
  name: string;
  code: string;
  state?: StateModel | number;
}

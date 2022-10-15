import { StateModel } from './state.mode';

export interface CountryModel {
  id: number;
  name: string;
  code: string;
  states?: StateModel[];
}

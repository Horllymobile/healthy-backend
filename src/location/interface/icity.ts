import { CreateCity } from '../dto/create.dto';
import { UpdateCity } from '../dto/update.dto';
import { CityModel } from './../../core/models/city.model';
export interface iState {
  getCities(
    state_id: number,
    page: number,
    size: number,
    search: string,
  ): Promise<{
    message: string;
    data: { page: number; size: number; total: number; countries: CityModel[] };
  }>;

  getCity(
    country_id: string,
    id: number,
    code?: string,
  ): Promise<{
    message: string;
    country: CityModel;
  }>;

  createCity(
    payload: CreateCity,
  ): Promise<{ message: string; country: CityModel }>;

  updateState(
    id: number,
    payload: UpdateCity,
  ): Promise<{ message: string; country: CityModel }>;

  deleteState(id: number): Promise<{ message: string; country: CityModel }>;
}

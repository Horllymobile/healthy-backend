import { UpdateCountry } from './../dto/update.dto';
import { CreateCountry } from './../dto/create.dto';
import { CountryModel } from 'src/core/models/country.model';

export interface iCountry {
  getCountries(
    page: number,
    size: number,
    search: string,
  ): Promise<{
    message: string;
    data: { page: number; size: number; countries: CountryModel[] };
  }>;

  getCountry(
    id: number,
    code?: string,
  ): Promise<{
    message: string;
    country: CountryModel;
  }>;

  createCountry(
    payload: CreateCountry,
  ): Promise<{ message: string; country: CountryModel }>;

  updateCountry(
    id: number,
    payload: UpdateCountry,
  ): Promise<{ message: string; country: CountryModel }>;

  deleteCountry(
    id: number,
  ): Promise<{ message: string; country: CountryModel }>;
}

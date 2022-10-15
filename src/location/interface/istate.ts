import { CreateState } from './../dto/create.dto';
import { UpdateState } from './../dto/update.dto';
import { StateModel } from './../../core/models/state.mode';
export interface iState {
  getStates(
    country_id: string,
    page: number,
    size: number,
    search: string,
  ): Promise<{
    message: string;
    data: { page: number; size: number; countries: StateModel[] };
  }>;

  getState(
    country_id: string,
    id: number,
    code?: string,
  ): Promise<{
    message: string;
    country: StateModel;
  }>;

  createState(
    payload: CreateState,
  ): Promise<{ message: string; country: StateModel }>;

  updateState(
    id: number,
    payload: UpdateState,
  ): Promise<{ message: string; country: StateModel }>;

  deleteState(id: number): Promise<{ message: string; country: StateModel }>;
}

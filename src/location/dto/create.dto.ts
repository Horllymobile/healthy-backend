export class CreateCountry {
  name: string;
  code: string;
}

export class CreateState {
  country: number;
  name: string;
  code: string;
}

export class CreateCity {
  name: string;
  code: string;
}

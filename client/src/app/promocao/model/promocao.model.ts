export class PartialSite {
  id: number;
}

export class PartialTheater {
  id: number;
}

export class Promocao {
  id?: number;
  name: string;
  price: number;
  date: string;
  site: PartialSite;
  theater: PartialTheater;
};
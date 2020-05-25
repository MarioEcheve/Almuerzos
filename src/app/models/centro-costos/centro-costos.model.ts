export interface ICentroCostos {
  id?: number;
  codigo?: string;
  nombre?: string;
}

export class CentroCostos implements ICentroCostos {
  constructor(public id?: number, public codigo?: string, public nombre?: string) {}
}

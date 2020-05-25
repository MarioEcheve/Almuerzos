import { ICentroCostos } from 'app/models/centro-costos/centro-costos.model';

export interface ITrabajador {
  id?: number;
  rut?: string;
  nombre?: string;
  apellidos?: string;
  centroCostos?: ICentroCostos;
}

export class Trabajador implements ITrabajador {
  constructor(
    public id?: number,
    public rut?: string,
    public nombre?: string,
    public apellidos?: string,
    public centroCostos?: ICentroCostos
  ) {}
}

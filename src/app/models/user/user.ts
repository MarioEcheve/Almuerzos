export class User {
  id: string;
  nombre: string;
  email: string;
  photo: string;

  constructor(id: string, nombre: string, email: string, photo: string) {
    this.id = id;
    this.nombre = nombre;
    this.email = email;
    this.photo = photo;
  }
}

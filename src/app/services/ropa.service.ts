import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})

export class RopaService {
  public nombre_prenda = "pantalones vaqueros";
  public coleccion_ropa = ["pantalones blancos", "camiseta roja"];

  constructor() {}

  prueba(nombre_prenda) {
    return nombre_prenda;
  }

  addRopa(nombre_prenda: string): Array<string>  {
    this.coleccion_ropa.push(nombre_prenda);

    return this.getRopa();
  }

  getRopa(): Array<string> {
    return this.coleccion_ropa;
  }

  deleteRopa(index: number) {
    /* nos elimina un elemento del array conservando la estructura,
    tambien borrará tantos elementos como indiquemos a partir de esa posicion */
    this.coleccion_ropa.splice(index, 1);

    return this.getRopa();
  }


}

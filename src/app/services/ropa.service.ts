import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RopaService {
  public nombre_prenda = 'pantalones vaqueros';
  public coleccion_ropa = ['pantalones blancos', 'camiseta roja'];

  constructor() { }

  prueba(nombre_prenda) {
     return nombre_prenda;
  }
addRopa(nombre_prenda){
  this.coleccion_ropa.push(nombre_prenda);

  return this.getRopa();
}
  getRopa() {
    return this.coleccion_ropa;
  }



}

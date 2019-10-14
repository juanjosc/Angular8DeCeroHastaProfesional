import { Component, OnInit } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [RopaService]
})


export class HomeComponent implements OnInit {
  public titulo= "Pagina principal";
  public listado_ropa: Array <String>;
  public prenda_a_guardar: string;


  public fecha;

  constructor(
    private _ropaService: RopaService
  ) {
    this.fecha = new Date();
  }

  ngOnInit() {
    this.listado_ropa = this._ropaService.getRopa();
    console.log(this._ropaService.prueba(this.listado_ropa));
  }

  guardarPrenda() {
    this._ropaService.addRopa(this.prenda_a_guardar);

    this.prenda_a_guardar = null;
  }

  eliminarPrenda(index: number){
    let confirmacion = confirm("Eliminar es permanente, Seguro?");

    if (confirmacion) {
      this._ropaService.deleteRopa(index);
    }

  }



}

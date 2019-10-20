import { Component, OnInit } from '@angular/core';
import { Coche } from './coche';

import { FormGroup, FormControl, Validators, Form } from '@angular/forms';

import { PeticionesService } from '../services/peticiones.service';


@Component({
  selector: "app-coches",
  templateUrl: "./coches.component.html",
  styleUrls: ["./coches.component.scss"],
  providers: [PeticionesService]
})
export class CochesComponent implements OnInit {
  public createForm: FormGroup;
  public coche: Coche;
  public articulos;

  public coches: Array<Coche>;

  constructor(private _peticionesService: PeticionesService) {
    this.coche = new Coche("", "", "");
    this.coches = [
      new Coche("Seat Ibiza", "120", "blanco"),
      new Coche("Renault CLio", "115", "negro")
    ];
  }

  ngOnInit() {

    this._peticionesService.getArticulos().subscribe(
      result => {
        this.articulos = result;
        if (!this.articulos) {
          console.log('Error en el servidor');
        }

        console.log(result);
      },
      error => {
        let errorMessage = <any>error;
        console.log(errorMessage);
      }
    );

    /*     this.createForm = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
      caballaje: new FormControl('', [Validators.required, Validators.maxLength(3)]),
      color: new FormControl('', [Validators.required, Validators.minLength(4)])
    });

    console.log(this.createForm); */
  }

  onSubmit() {
    this.coches.push(this.coche);
    this.coche = new Coche("", "", "");
  }
}

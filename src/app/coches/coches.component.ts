import { Component, OnInit } from '@angular/core';
import { Coche } from './coche';

import { FormGroup, FormControl, Validators, Form } from '@angular/forms';

import { PeticionesService } from '../services/peticiones.service';


@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.scss'],
  providers: [PeticionesService]
})

export class CochesComponent implements OnInit {
  public createForm: FormGroup;
  public coche: Coche;

  public coches: Array<Coche>;

  constructor(
    private _peticionesService: PeticionesService
  ) {
    this.coche = new Coche("","","");
    this.coches = [
      new Coche("Seat Ibiza","120","blanco"),
      new Coche("Renault CLio","115","negro")
    ];
   }

  ngOnInit() {

    console.log(this._peticionesService.getPrueba());

/*     this.createForm = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
      caballaje: new FormControl('', [Validators.required, Validators.maxLength(3)]),
      color: new FormControl('', [Validators.required, Validators.minLength(4)])
    });

    console.log(this.createForm); */
  }

  onSubmit() {
     this.coches.push(this.coche);
     this.coche = new Coche("","","");
  }

}

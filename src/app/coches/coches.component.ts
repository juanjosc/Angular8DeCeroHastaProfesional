import { Component, OnInit } from '@angular/core';
import { Coche } from './coche';

import { FormGroup, FormControl, Validators, Form } from '@angular/forms';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.scss']
})

export class CochesComponent implements OnInit {
  public createForm: FormGroup;
  public coche: Coche;

  constructor() {
    this.coche = new Coche("","","");
   }

  ngOnInit() {
/*     this.createForm = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
      caballaje: new FormControl('', [Validators.required, Validators.maxLength(3)]),
      color: new FormControl('', [Validators.required, Validators.minLength(4)])
    });

    console.log(this.createForm); */
  }

  onSubmit() {
     console.log(this.coche);
  }

}

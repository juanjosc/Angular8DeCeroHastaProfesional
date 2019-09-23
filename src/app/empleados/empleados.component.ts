import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements OnInit {

  public usuarios: Usuario[] = [
    {
      id: 1,
      nombre: 'Angel',
      apellidos: 'Garcia'
    },
    {
      id: 2,
      nombre: 'Manolo',
      apellidos: 'Lama'
    },
    {
      id: 3,
      nombre: 'José',
      apellidos: 'Hernandez'
    },
    {
      id: 4,
      nombre: 'Angel',
      apellidos: 'Pallas'
    },
    {
      id: 5,
      nombre: 'Carla',
      apellidos: 'Hernandez'
    },
    {
      id: 6,
      nombre: 'Mariajo',
      apellidos: 'Franco'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}


 export interface Usuario {
   id: number,
   nombre: string,
   apellidos: string
 }
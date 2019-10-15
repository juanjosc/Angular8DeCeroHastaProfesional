import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PeticionesService {

  constructor() { }

  getPrueba() {
    return 'Hola desde el servicio peticiones.';
  }

}

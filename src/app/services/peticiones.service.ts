import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, take } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class PeticionesService {
  public  url: string;


  constructor( private _http: HttpClient) {
    this.url = "https://jsonplaceholder.typicode.com/posts";
  }

  getPrueba() {
    return 'Hola desde el servicio peticiones.';
  }

  getArticulos() {
    //peticion http o peticion AJAX
    return this._http.get(this.url)
    //en los primeros angular es necesario tranformar la cosulta API REST
    //de un json en algo legible para javascript (res:any) => res.json
    //en las versiones mas mnuevas deangular no es necesaria esta tranformacion
      .pipe(map((res:any) => res));
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ConversorPipe } from './pipes/conversor.pipe';
import { CochesComponent } from './coches/coches.component';

// Importar HttpClientModule
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    HomeComponent,
    ContactoComponent,
    ConversorPipe,
    CochesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, // cargamos el módulo

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

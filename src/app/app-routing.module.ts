import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { EmpleadosComponent } from './empleados/empleados.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CochesComponent } from './coches/coches.component';

const routes: Routes = [
  {path: 'pagina-principal', component: HomeComponent},
  {path: 'empleados', component: EmpleadosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'coches', component: CochesComponent},

  {path: '', component: HomeComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoHijoComponent } from './empleado-hijo/empleado-hijo.component';
import { CaracteristicasEmpleadoComponent } from './caracteristicas-empleado/caracteristicas-empleado.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { InfoComponetComponent } from './info-componet/info-componet.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';

//Routing
const appRoutes:Routes=[

  {path:'', component:HomeComponentComponent}, 
  {path:'proyectos', component:ProyectosComponentComponent},
  {path:'info', component:InfoComponetComponent},
  {path:'contacto', component:ContactoComponentComponent},
  {path:'actualiza/:id', component:ActualizaComponentComponent}


];
//Components declarations
@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoComponent,
    CaracteristicasEmpleadoComponent,
    HomeComponentComponent,
    ProyectosComponentComponent,
    InfoComponetComponent,
    ContactoComponentComponent,
    ActualizaComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)//Routing
  ],
  providers: [ServicioEmpleadosService, EmpleadosService],//Registro de servicios
  bootstrap: [AppComponent]
})
export class AppModule { }

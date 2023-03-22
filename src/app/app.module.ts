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
import { ErrorPageComponent } from './error-page/error-page.component';
import { DataServices } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { CookieService } from 'ngx-cookie-service';
import { LoginGuardian } from './login/login-guardian';

//Routing
const appRoutes:Routes=[

  {path:'', component:HomeComponentComponent}, 
  {path:'proyectos', component:ProyectosComponentComponent},
  {path:'info', component:InfoComponetComponent},
  {path:'contacto', component:ContactoComponentComponent, canActivate:[LoginGuardian]},//solo se visualiza si se loguea
  {path:'actualiza/:id', component:ActualizaComponentComponent},
  {path:'login', component:LoginComponent},
  {path:'**', component:ErrorPageComponent}


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
    ActualizaComponentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),//Routing
    HttpClientModule,
  ],
  providers: [ServicioEmpleadosService, EmpleadosService, DataServices, LoginService, CookieService, LoginGuardian],//Registro de servicios
  bootstrap: [AppComponent]
})
export class AppModule { }

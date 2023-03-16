import { Component } from '@angular/core';
import { Empleado } from './empleado.model';
import { EmpleadosService } from './empleados.service';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import firebase from 'firebase/compat/app';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Lista de Motociclistas';

  //llamado al servicio creado
  constructor(private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService, private loginServive:LoginService) {

   // this.empleados=this.empleadosService.empleados;
  }

  ngOnInit(): void {

    firebase.initializeApp({

      apiKey: "AIzaSyAGyKBUxEFKRvKOXAXJcVsGQAy-YzA08cE",
      authDomain: "empleados-4aa26.firebaseapp.com",
    })
  }

  //Metodos de login y logout
  userLogin(){
    return this.loginServive.userLogin();
  }

  userLogout(){
    this.loginServive.userLogout();
  }

  /*empleados:Empleado[]=[]

  agregarEmpleado(){

    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);//inyeccion de servicio
    this.empleadosService.agregarEmpleadoService(miEmpleado);
  }


  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;*/



}

import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  titulo = 'Registro de empleados';

  constructor(private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService) { 
    //this.empleados=this.empleadosService.empleados;
  }

  ngOnInit(): void {
    //this.empleados=this.empleadosService.empleados;

    this.empleadosService.ObtenerMiembros().subscribe(motoMiembros=>{

      console.log(motoMiembros);

      this.empleados = Object.values(motoMiembros);

      this.empleadosService.setMiembros(this.empleados);
    });
  }

  empleados:Empleado[]=[];

  agregarEmpleado(){

    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);//inyeccion de servicio
    this.empleadosService.agregarEmpleadoService(miEmpleado);
  }


  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

}

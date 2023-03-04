//Data service
import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { DataServices } from './data.service';

@Injectable()

export class EmpleadosService{

    constructor(private ventanaEmergente: ServicioEmpleadosService, private dataService:DataServices){


    }

    setMiembros(motoMiembros:Empleado[]){

      this.empleados = motoMiembros;
      
    }
    
    ObtenerMiembros(){

      return this.dataService.CargarMiembros();
    }

    //Empleados Precargados
    empleados:Empleado[]=[];
    /*empleados:Empleado[]=[

        new Empleado("Alberto","Perez","Gerente",7500),
        new Empleado("Juan","Martinez","Abogado",6500),
        new Empleado("Jazmin","Gonzalez","Contadora",5500),
        new Empleado("Jose","Garcia","Sistemas",5500),
        new Empleado("Francisco","Lopez","Supervisor",4500),
    
      ];*/
      // Crear empleado
      agregarEmpleadoService(miEmpleado:Empleado){

        this.ventanaEmergente.muestraMensaje("Miembro a agregar: " + "/n" + 
        miEmpleado.nombre + "/n" + "Salario: " + miEmpleado.salario);

        this.empleados.push(miEmpleado);

        this.dataService.guardarEmpleados(this.empleados);
      }

      // Buscar Empleado
      encontrarEmpleado(indice:number){

        let empleado: Empleado= this.empleados[indice];

        return empleado;
      }

      //Actualizar datos de empleados
      actualizarEmpleado(indice:number, empleado:Empleado){

        let empledoUpdate = this.empleados[indice];

        empledoUpdate.nombre = empleado.nombre;
        empledoUpdate.apellido = empleado.apellido;
        empledoUpdate.cargo = empleado.cargo;
        empledoUpdate.salario = empleado.salario;

        this.dataService.actualizarMiembro(indice,empleado);
      }

      // Eliminar empleados
      eliminaEmpleado(indice:number){

        this.empleados.splice(indice,1);

        this.dataService.eliminarMiembro(indice);

        if(this.empleados!=null) this.dataService.guardarEmpleados(this.empleados);
        
      }
}
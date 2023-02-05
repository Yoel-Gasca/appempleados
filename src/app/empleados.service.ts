//Data service
import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Injectable()

export class EmpleadosService{

    constructor(private ventanaEmergente: ServicioEmpleadosService){


    }


    empleados:Empleado[]=[

        new Empleado("Alberto","Perez","Gerente",7500),
        new Empleado("Juan","Martinez","Abogado",6500),
        new Empleado("Jazmin","Gonzalez","Contadora",5500),
        new Empleado("Jose","Garcia","Sistemas",5500),
        new Empleado("Francisco","Lopez","Supervisor",4500),
    
      ];

      agregarEmpleadoService(miEmpleado:Empleado){
        this.ventanaEmergente.muestraMensaje("Miembro a agregar: " + "/n" + 
        miEmpleado.nombre + "/n" + "Salario: " + miEmpleado.salario);
        this.empleados.push(miEmpleado);
      }
}
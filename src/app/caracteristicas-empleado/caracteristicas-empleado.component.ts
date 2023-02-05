import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado',
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrls: ['./caracteristicas-empleado.component.css']
})
export class CaracteristicasEmpleadoComponent implements OnInit {

  @Output() caracteristicasEmpleados = new EventEmitter<string>(); // Marca las propiedades de los componentes

  //llamado al servicio creado
  //constructor(private miServicio:ServicioEmpleadosService) { }

  ngOnInit(): void {
  }

  agregarCaracteristicas(value: string){
    //this.miServicio.muestraMensaje(value); //Uso del Servicio
    //this.caracteristicasEmpleados.emit(value);
  }

}

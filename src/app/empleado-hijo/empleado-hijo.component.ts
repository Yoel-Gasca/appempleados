import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo',
  templateUrl: './empleado-hijo.component.html',
  styleUrls: ['./empleado-hijo.component.css']
})
export class EmpleadoHijoComponent implements OnInit {

  @Input() empleadoLista:Empleado;

  @Input() indice:number;

  constructor() { }

  ngOnInit(): void {
  }

  arrayCaracteristicas = [''];

  agregarCaracteristica(nuevaCaract: string) {
    this.arrayCaracteristicas.push(nuevaCaract);
  }

}

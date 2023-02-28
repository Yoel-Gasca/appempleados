import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';

@Injectable()
export class DataServices{

    constructor(private httpClient:HttpClient){}

    CargarMiembros(){

        return this.httpClient.get('https://empleados-4aa26-default-rtdb.firebaseio.com/datos.json');
    }

    guardarEmpleados(empleados:Empleado[]){

        this.httpClient.put('https://empleados-4aa26-default-rtdb.firebaseio.com/datos.json',empleados).subscribe(

            response=>console.log("Se han guardado los registros:" + response),

            error=> console.log("Error: " + error),
        )
    }
}
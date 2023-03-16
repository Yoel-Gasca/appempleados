import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { LoginService } from './login/login.service';

@Injectable()
export class DataServices{

    constructor(private httpClient:HttpClient, private loginService:LoginService){}

    //Vinculando con la base de datos
    CargarMiembros(){

        const token=this.loginService.getIdToken();
        return this.httpClient.get('https://empleados-4aa26-default-rtdb.firebaseio.com/datos.json?auth=' + token);
    }

    //Guardando los datos en la BD
    guardarEmpleados(empleados:Empleado[]){

        this.httpClient.put('https://empleados-4aa26-default-rtdb.firebaseio.com/datos.json',empleados).subscribe(

            response=>console.log("Se han guardado los registros:" + response),

            error=> console.log("Error: " + error),
        )
    }

    //Metodo para actulizar datos en la BD
    actualizarMiembro(indice:number, empleado:Empleado){

        let url='https://empleados-4aa26-default-rtdb.firebaseio.com/datos/'+ indice + '.json';
        
        this.httpClient.put(url,empleado).subscribe(

            response=>console.log("Se han modificado los registros:" + response),

            error=> console.log("Error: " + error),
        )
    }

    //Metodo para Eliminar registros en la BD
    eliminarMiembro(indice:number){

        let url='https://empleados-4aa26-default-rtdb.firebaseio.com/datos/'+ indice + '.json';
        
        this.httpClient.delete(url).subscribe(

            response=>console.log("Se ha eliminado el registro:" + response),

            error=> console.log("Error: " + error),
        )
    }
}
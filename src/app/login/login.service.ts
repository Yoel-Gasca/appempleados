import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


@Injectable()
export class LoginService{

    constructor(private router:Router){}

    token:string;

    //Auntenticacion de login con email y contraseña
    login(email:string, password:string){

        firebase.auth().signInWithEmailAndPassword(email, password).then(
            
            //Genera un token para autenticacion
            response=>{

                firebase.auth().currentUser?.getIdToken().then(

                    token=>{
                        this.token=token;
                        this.router.navigate(['/']);
                    }
                )
            }

        );

    }

    //Metodo que devuelve el token
    getIdToken(){

        return this.token;
    }
}
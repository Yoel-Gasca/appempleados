import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class LoginService{

    constructor(private router:Router, private cookies:CookieService){}

    token:string;

    //Auntenticacion de login con email y contraseña
    login(email:string, password:string){

        firebase.auth().signInWithEmailAndPassword(email, password).then(
            
            //Genera un token para autenticacion
            response=>{

                firebase.auth().currentUser?.getIdToken().then(

                    token=>{
                        this.token=token;
                        this.cookies.set("token",this.token);
                        this.router.navigate(['/']);
                    }
                )
            }

        );

    }

    //Metodo que devuelve el token
    getIdToken(){

        //return this.token;
        return this.cookies.get("token");
    }

    //Verifica si el usuario esta logueado
    userLogin(){
        
        //return this.token;
        return this.cookies.get("token");
    }

    //Metodo para cerrar sesion de usuario
    userLogout(){
        firebase.auth().signOut().then(()=>{
            this.token="";
            this.cookies.set("token",this.token);
            this.router.navigate(['/']);
            window.location.reload();
        });
    }
}
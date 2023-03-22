import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from "rxjs";
import { LoginService } from './login.service';
import { Injectable } from '@angular/core';

//Esto permitira proteger alguna de las paginas del sitio
@Injectable()
export class LoginGuardian implements CanActivate{
    
    constructor(private loginService:LoginService, private router: Router){}

    //Solo permitira visualizar algunas de las paginas del sitio si el usuario esta logueado
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
        if(this.loginService.userLogin()){
            return true;
        }
        else{

            this.router.navigate(['login']);
            return false;
            
        }
    }


}
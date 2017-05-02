import { Injectable } from '@angular/core';
import { CanActivate ,Router} from '@angular/router';
import {ActivatedRouteSnapshot} from '@angular/router';

@Injectable()
export class ValidService {
  static users:string;
  static pas:string;
  constructor(public router1:Router) { }
  set(user,pass)
  {
    ValidService.users=user;
    ValidService.pas=pass;
    this.router1.navigate(['/username']);
  }

}

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

  constructor() {}
  canActivate() {
    // console.log();
    if(ValidService.pas=="shashank"&&ValidService.users=="shashank")
    {
      return true;
    }
    else{
      return false;
    } 
    
  }
}
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http , Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'


@Injectable()
export class ConnectService {
  public name1:string="";
  constructor(private httpService: Http,private httpService1: Http) { 
  }
    getdetails(): Observable<any>{
    console.log(this.name1);
    var a:string='https://api.github.com/users/';
    var b:string=this.name1.trim();
    a=a+b;
    //a.replace('%20', "");
    console.log(a);
    return this.httpService.get(a).map(
      data => data.json()
    );
  }
  setuser(dat)
  {
     this.name1=dat;
  }

}

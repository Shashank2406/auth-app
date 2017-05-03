import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../connect.service';


@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  user:string;
  a:Object={};
  constructor(public send:ConnectService) {
    this.user="";
   }

  ngOnInit() {
  }
  check(form1)
  {
    console.log(form1.value.username);
     this.send.setuser(form1.value.username);
     this.send.getdetails().subscribe(b => {
       this.a=b;
       console.log(this.a);
     })
  }
}

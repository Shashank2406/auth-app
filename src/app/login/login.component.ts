import { Component, OnInit } from '@angular/core';
import { ValidService } from '../valid.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:string;
  pass:string;
  constructor(public send:ValidService) {
    this.user="";
    this.pass="";
   }

  ngOnInit() {
  }
  check(form1)
  {
    console.log(form1.value.username);
    console.log(form1.value.password);
    this.send.set(form1.value.username,form1.value.password)
  }
}

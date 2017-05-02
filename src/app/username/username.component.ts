import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  user:string;
  constructor() {
    this.user="";
   }

  ngOnInit() {
  }
  check(form1)
  {
    console.log(form1.value.username);
    // this.send.setuser(form1.value.username);
    // this.send.getdetails().subscribe(b => {
    //   //this.a=JSON.stringify(b);
    //   this.a=b;
    //   console.log(this.a);
    // })
  }
}

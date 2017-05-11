import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { ConnectService } from '../connect.service';
import { HeadComponent } from '../head/head.component';


@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  user:string;
  a:Object={};
  constructor(public send:ConnectService,public dync:ComponentFactoryResolver,public view:ViewContainerRef) {
    this.user="";
    
   }

  ngOnInit() {
   this.addComponent();
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
  addComponent() {
       const factory = this.dync.resolveComponentFactory(HeadComponent);
       const ref = this.view.createComponent(factory,0);
       ref.changeDetectorRef.detectChanges();
       console.log('da');
   }
  //Remove a component 
//    remove(){
//      this.viewContainerRef.remove(0);      
//    }
}

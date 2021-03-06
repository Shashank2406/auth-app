import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { UsernameComponent } from './username/username.component';
import { RouterModule,Routes } from '@angular/router';
import { ConnectService } from './connect.service';
import { ValidService } from './valid.service';
import { LoginComponent } from './login/login.component';
import { CanActivateViaAuthGuard } from './valid.service';
import { Pipee } from './pipee.service';
import { ProComponent } from './pro/pro.component';

const rou: Routes=[
{path:'' ,component:LoginComponent},
{path:'username' ,component:UsernameComponent,canActivate: [CanActivateViaAuthGuard],
//  children:[
//    {
//      path:'pro' ,component:ProComponent
//    },
//    {
//    path:'username' ,component:UsernameComponent
//    }
//  ]
},
 {
     path:'pro' ,component:ProComponent,canActivate: [CanActivateViaAuthGuard]
   },
];
@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    UsernameComponent,
    LoginComponent,
    ProComponent,
    Pipee
  ],
  entryComponents: [HeadComponent]
  ,
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rou)
  ],
  providers: [ConnectService,ValidService,CanActivateViaAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

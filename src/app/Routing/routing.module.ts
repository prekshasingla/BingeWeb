import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { LoginNewComponent } from '../loginNew/loginNew.component';

const route:Routes=[
    {path:'login',component:LoginNewComponent}
]
@NgModule({
    imports: [
      CommonModule,RouterModule.forRoot(route)
    ],
    exports:[RouterModule]
  })
  export class RoutingModule { }
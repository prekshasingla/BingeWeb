import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';
import { LoginNewComponent } from '../loginNew/loginNew.component';
import { OrderDetailComponent } from '../order-detail/order-detail.component';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { TableBookingComponent } from '../table-booking/table-booking.component';
import { RestaurantInfoComponent } from '../restaurant-info/restaurant-info.component';
const route:Routes=[
  {path:'login',component:LoginNewComponent},
  {path:'signup',component:SignupComponent},
  {path:'orders',component:OrderDetailComponent},
  {path:'menu',component:MenuItemComponent},
  {path:'tablebooking',component:TableBookingComponent},
  {path:'restaurantinfo',component:RestaurantInfoComponent}
]
@NgModule({
    imports: [
      CommonModule,RouterModule.forRoot(route)
    ],
    exports:[RouterModule]
  })
  export class RoutingModule { }
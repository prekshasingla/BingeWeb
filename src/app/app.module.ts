import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment.prod';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestore} from 'angularfire2/firestore';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { AgmCoreModule } from '@agm/core';
import { OrdersService} from './services/orders.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { OrdersComponent } from './orders/orders.component';
import { TableBookingComponent } from './table-booking/table-booking.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { RouterModule, Routes } from '@angular/router';
import { DiscountComponent } from './discount/discount.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FirstSectionComponent } from './homepage/first-section/first-section.component';
import { SecondSectionComponent } from './homepage/second-section/second-section.component';
import { ThirdSectionComponent } from './homepage/third-section/third-section.component';
import { FourthSectionComponent } from './homepage/fourth-section/fourth-section.component';
import { FifthSectionComponent } from './homepage/fifth-section/fifth-section.component';
import { SixthSectionComponent } from './homepage/sixth-section/sixth-section.component';
import { RestaurantInfoComponent } from './restaurant-info/restaurant-info.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './homepage/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OrderDetailComponent,
    LoginComponent,
    SignupComponent,
    OrdersComponent,
    TableBookingComponent,
    MenuItemComponent,
    DiscountComponent,
    HomepageComponent,
    FirstSectionComponent,
    SecondSectionComponent,
    ThirdSectionComponent,
    FourthSectionComponent,
    FifthSectionComponent,
    SixthSectionComponent,
    RestaurantInfoComponent,
    DashboardComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase , 'BingeTesting'),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDCQmappvjvLYDo5fCzIfhpV_YZW0uGn7U'
    })
  ],
  providers: [AngularFirestore, OrdersService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

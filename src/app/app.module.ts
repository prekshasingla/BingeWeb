import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment.prod';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestore} from 'angularfire2/firestore';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { AgmCoreModule } from '@agm/core';
import { OrdersService} from './services/orders.service';
import { LoginComponent } from './login/login.component';
import { LoginNewComponent } from './loginNew/loginNew.component';
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
import { CategoryCardsComponent } from './category-cards/category-cards.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageTwoTopComponent } from './page-two-top/page-two-top.component';
import { PageTwoSideNavComponent } from './page-two-side-nav/page-two-side-nav.component';
import { PageTwoRightDataComponent } from './page-two-right-data/page-two-right-data.component';
import { RightDataComponent } from './right-data/right-data.component';
import { LocationSearchComponent } from './location-search/location-search.component';
import { IndexCompComponent } from './index-comp/index-comp.component';
import { AgmDirectionModule } from 'agm-direction';
import { PrivayPolicyComponent } from './privay-policy/privay-policy.component';

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
    CategoryCardsComponent,
    AppComponent,
    SideNavComponent,
    RightDataComponent,
    LocationSearchComponent,
    PageOneComponent,
    PageTwoComponent,
    PageTwoTopComponent,
    PageTwoSideNavComponent,
    PageTwoRightDataComponent,
    IndexCompComponent,
    LoginNewComponent,
    PrivayPolicyComponent
  ],
  imports: [
    RouterModule.forRoot([
      {
         path: 'page-two/:restroId',
         component: PageTwoComponent
      },{
        path: 'page-one/:catName',
        component: PageOneComponent
      },
      {
        path: 'privacypolicy.html',
        component: PrivayPolicyComponent
      },
      {
        path: '',
        component: IndexCompComponent
      },

   ]),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseCred),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAyfSgfWLxQxcgl8D2RFsiaSJaaOTuyy48",
      libraries: ["places"]
    }),
    AgmDirectionModule
  ],
  providers: [AngularFirestore, OrdersService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

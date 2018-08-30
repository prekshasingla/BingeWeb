import {Component, EventEmitter, Output} from '@angular/core';
import {OrdersService} from '../services/orders.service';
import { OnInit} from '@angular/core';
import { User } from '../models/User.model';
import { Offer } from '../models/Offer.model';

@Component({
  selector: 'app-index-comp',
  templateUrl: './index-comp.component.html',
  styleUrls: ['./index-comp.component.css']
})
export class IndexCompComponent implements OnInit {
  Orders: Array<Object>;
  PreOrders: Array<Object>;
  InsideOrders: Array<Object>;
  MenuItems: Array<Object>;
  Offers: Array<Offer>;
  CurrentOffers: Array<Offer> = [];
  public selectedOrder;
  private selectedPreOrder;
  private selectedInsideOrder;
  public Dishes;
  public Quantity;
  public LoadedFeature = 'homepage';
  public LoggedInUser: User;

  constructor(private ordersService: OrdersService) {}

  ngOnInit() {
  }

  SendOrderDetail(Order) {
    this.selectedOrder = Order;
    this.Dishes = Object.keys(Order.dishes);
    this.Quantity = Object.values(Order.dishes);
  }

  OnNavigate(feature) {
    this.LoadedFeature = feature;
    if (feature === 'Login') {
      this.LoggedInUser = null;
    }
  }

  showOrders(user: User) {
    this.LoggedInUser = user;
    this.ordersService.getOrders(user.restaurant_id).subscribe(order => {
      this.Orders = order;
      // console.log(this.Orders);
    });

    this.ordersService.getPreOrders(user.restaurant_id).subscribe(PreOrder => {
      this.PreOrders = PreOrder;
      //console.log(this.PreOrders);
    });

    this.ordersService.getInsideOrders(user.restaurant_id).subscribe(InsideOrder => {
      this.InsideOrders = InsideOrder;
      // console.log(this.Orders);
    });

    this.LoadedFeature = 'Orders';
    this.getMenuItems();
    this.getOffers();
  }

  getMenuItems() {
    this.ordersService.getMenuItem(this.LoggedInUser.restaurant_id).subscribe( item => {
      this.MenuItems = item;
    });
  }

  getOffers() {
    this.ordersService.getOffers(this.LoggedInUser.restaurant_id).subscribe(offer => {
      this.Offers = offer;
      this.getCurrentOffer();
    });
  }

  getCurrentOffer() {
    if (this.CurrentOffers) {
      for ( let i = 0; i < this.CurrentOffers.length; i++) {
        this.CurrentOffers.pop();
      }
    }
    if (this.Offers) {
      for (let i = 0; i < this.Offers.length; i++) {
          const open = this.Offers[i].date + ' ' + this.Offers[i].start_time;
          const close = this.Offers[i].date + ' ' + this.Offers[i].end_time;
          const start = new Date(open).getTime();
          const end = new Date(close).getTime();
          const currTime = new Date().getTime();
          if (currTime > start && currTime < end) {
            this.CurrentOffers.push(this.Offers[i]);
          }
      }
    } else {
      console.log('Offers does not exist');
    }
  }

}

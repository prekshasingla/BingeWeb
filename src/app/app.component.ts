import {Component, EventEmitter, Output} from '@angular/core';
import {OrdersService} from './services/orders.service';
import { OnInit} from '@angular/core';
import { User } from './models/User.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Orders: Array<Object>;
  MenuItems: Array<Object>;
  public selectedOrder;
  public Dishes;
  public Quantity;
  public LoadedFeature = 'Login';
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
    this.LoadedFeature = 'Orders';
    this.getMenuItems();
  }

  getMenuItems() {
    this.ordersService.getMenuItem(this.LoggedInUser.restaurant_id).subscribe( item => {
      this.MenuItems = item;
    });
  }
}

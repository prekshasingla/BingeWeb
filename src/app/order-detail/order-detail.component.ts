import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  @Input() ShowOrder;
  @Input() dishes;
  @Input() quantities;
  @Input() user;

  constructor(private ordersService: OrdersService) {
  }

  ngOnInit() {
  }

  DeleteOrder(order: Object) {
    this.ordersService.DeleteOrder(this.user.restaurant_id, order);
    this.ShowOrder = null;
    // console.log(order);
  }

  UpdateOrder(order: Object , status: string) {
    // console.log(this.dishes);
    this.ordersService.UpdateOrder(this.user.restaurant_id, order, status);
  }
}

import {Component, Input, OnInit, EventEmitter, Output, AfterViewInit} from '@angular/core';
import { Menu } from '../models/menu-item.model';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  public MenuForm = false;
  title; desc; category; price; course_type; serving; veg;
  @Input() Restaurant;
  @Input() Menu;
  @Input() ShowOrder;
  @Input() InsideOrder;
  @Input() dishes;
  @Input() quantities;
  @Input() item;
  @Input() time_to_reach;
  constructor(private orderService: OrdersService) { }

  ngOnInit() {
    console.log("ans");
    console.log(this.Menu);
    console.log(this.Restaurant);
  }

  ShowMenuForm() {
    if (this.MenuForm) {
      this.MenuForm = false;
    } else {
      this.MenuForm = true;
    }
  }

  SaveMenu(title: string, desc: string, category: string , price: string , veg: string , course_type: string, serving: string) {
    // console.log(title, desc , category , price , 0 , course_type , serving);
    if (veg === '1') {
      this.orderService.SaveMenuItem(this.Restaurant.restaurant_id , title , desc , category , price , 0 , course_type , serving);
    } else {
      this.orderService.SaveMenuItem(this.Restaurant.restaurant_id , title , desc , category , price , 1 , course_type , serving);
    }
    console.log(this.title);
    this.title = '';
  }
}

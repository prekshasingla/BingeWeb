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
  public MenuForm2 =false;
  title; desc; category; price; course_type; Serving; veg;
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
    console.log(this.item);
    console.log(this.Restaurant);
  }

  ShowMenuForm() {
    console.log(this.MenuForm);
    if (this.MenuForm) {
      this.MenuForm = false;
    } else {
      this.MenuForm = true;
    }
  }
  DeleteOrder(item :Object)
  {
    console.log(item);
    this.orderService.DeleteOrder2(item);
    this.item = null;
  }
  edit(item :Object)
  {
    this.MenuForm2 = true;

  }
  SaveMenu(title: string, desc: string, category: string , price: string , veg: string , course_type: string, Serving: string) {
    console.log('hero');
    console.log(title, desc , category , price , 0 , course_type , Serving);
    if (veg === '1') {
      this.orderService.SaveMenuItem(this.Restaurant.restaurant_id , title , desc , category , price , 0 , course_type , Serving);
    } else {
      this.orderService.SaveMenuItem(this.Restaurant.restaurant_id , title , desc , category , price , 1 , course_type , Serving);
    }
    console.log(this.title);
    this.title = '';
  }
  SaveMenu2(title: string, desc: string, category: string , price: string , veg: string , course_type: string, Serving: string,item: Object) {
    console.log('hero');
    console.log(title, desc , category , price , 0 , course_type , Serving);
    if (veg === '1') {
      this.orderService.SaveMenuItem2(this.Restaurant.restaurant_id , title , desc , category , price , 0 , course_type , Serving,item);
    } else {
      this.orderService.SaveMenuItem2(this.Restaurant.restaurant_id , title , desc , category , price , 1 , course_type , Serving,item);
    }
    console.log(this.title);
    this.title = '';
  }
}

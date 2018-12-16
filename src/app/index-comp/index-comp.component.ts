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
  MenuItems2: Array<Object>;
  MenuItems4: Array<Object>;
  MenuItems3: Array<Object>;
  Offers: Array<Offer>;
  CurrentOffers: Array<Offer> = [];
  public selectedOrder;
  private selectedPreOrder;
  private selectedInsideOrder;
  public Dishes;
  public Quantity;
  public TimeToReach;
  public LoadedFeature = 'homepage';
  public LoggedInUser: User;
  keys:any;
  values:any;

  constructor(private ordersService: OrdersService) {}

  ngOnInit() {
    console.log(this.PreOrders);
    console.log(this.MenuItems);
    console.log(this.InsideOrders);
    console.log(this.Offers);
    console.log(this.CurrentOffers);
  }

  SendOrderDetail(Order) {
    this.selectedOrder = Order;
    this.TimeToReach = Object.values(Order.time_to_reach);
    
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
       console.log(this.Orders);
    });

    this.ordersService.getPreOrders(user.restaurant_id).subscribe(PreOrder => {
      this.PreOrders = PreOrder;
          console.log('this preorders',this.PreOrders);
    });

    this.ordersService.getInsideOrders(user.restaurant_id).subscribe(InsideOrder => {
      this.InsideOrders = InsideOrder;
      console.log('baba',this.InsideOrders);
    });

    this.ordersService.getMenuItem(this.LoggedInUser.restaurant_id).subscribe(item => {
      this.MenuItems = item;
      console.log('baba2',this.MenuItems);
    });

    this.ordersService.getMenuADDItem(this.LoggedInUser.restaurant_id).subscribe(item2 => {
      console.log('baba444',item2);
      this.MenuItems2 = item2;
      console.log('baba3',this.MenuItems2);
    });
    this.ordersService.getMenuADDItem3(this.LoggedInUser.restaurant_id).subscribe(item4 => {
      this.MenuItems4 = item4;
      console.log('kkkkkkkk',this.MenuItems4);
    });
    this.ordersService.getMenuADDItem1(this.LoggedInUser.restaurant_id).subscribe(item3 => {
      this.MenuItems3 = item3;
      console.log('kk',this.MenuItems3);
    });

    this.LoadedFeature = 'Orders';
    this.getMenuItems();
    this.getOffers();
  }

  getMenuItems() {
    this.ordersService.getMenuItem(this.LoggedInUser.restaurant_id).subscribe(item => {
      this.MenuItems = item;
      console.log(this.MenuItems);
    });
    this.ordersService.getMenuADDItem(this.LoggedInUser.restaurant_id).subscribe(item2 => {
      this.MenuItems2 = item2;
      console.log('baba3',this.MenuItems2);
    });
    this.ordersService.getMenuADDItem1(this.LoggedInUser.restaurant_id).subscribe(item3 => {
      this.MenuItems3 = item3;
      console.log('kk',this.MenuItems3);
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

  separateKyesValues(data:any,type:any){
     this.keys=[];
     this.values=[];
     let tempKeys:any;
     for(let obj of data){
      tempKeys=Object.keys(obj);
      for(let obj1 of tempKeys){
           this.keys.push(obj1);
           this.values.push(obj[obj1]);
      }
     }
     if(type=='loop'){
       return this.keys;
     }
     else if(type=='length'){
       return this.keys.length;
     }
  }

   printFunction()  {
    // let printData=document.getElementById('printData').innerHTML;
    // let oldData=document.getElementById('holdprintData').innerHTML;
    // document.body.innerHTML=printData;
    // window.print();
    // document.body.innerHTML=oldData;
  }


}

import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-restaurant-info',
  templateUrl: './restaurant-info.component.html',
  styleUrls: ['./restaurant-info.component.css']
})
export class RestaurantInfoComponent implements OnInit {
  @Input() Restaurant;
  Email ; title; desc ; Address ; FacebookLink ; TwitterLink ; Location ; Contact_No ; RestaurantName ;

  constructor(private Service: OrdersService) { }

  ngOnInit() {
  }

  SaveInfo() {
    // console.log(this.Restaurant.restaurant_id, this.Email, this.desc, this.Address, this.FacebookLink, this.TwitterLink,
    //   this.Location, this.Contact_No, this.RestaurantName);

    this.Service.addRestaurantInfo(this.Restaurant.restaurant_id, this.Email, this.desc, this.Address, this.FacebookLink, this.TwitterLink,
      this.Location, this.Contact_No, this.RestaurantName);
  }

}

import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import {} from '@types/googlemaps';

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
    let location_lat ;
    let location_long ;
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': this.Location}, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        location_lat =  results[0].geometry.location.lat();
        location_long = results[0].geometry.location.lng();
      }
    });

    this.Service.addRestaurantInfo(this.Restaurant.restaurant_id, this.Email, this.desc, this.Address, this.FacebookLink, this.TwitterLink,
      location_lat, location_long, this.Contact_No, this.RestaurantName);
  }

}

import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { OrdersService } from '../services/orders.service';
import {} from '@types/googlemaps';

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
  private viewMap = false;

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

// GOOGELE MAPS

  initMap() {
    this.viewMap = !this.viewMap;
    const directionsService = new google.maps.DirectionsService;
    const directionsDisplay = new google.maps.DirectionsRenderer;
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: {lat: this.ShowOrder.location_lat, lng: this.ShowOrder.location_long}
    });
    directionsDisplay.setMap(map);
    this.calculateAndDisplayRoute(directionsService, directionsDisplay);
  }

  calculateAndDisplayRoute(directionsService, directionsDisplay) {
    const start = new google.maps.LatLng(this.ShowOrder.location_lat, this.ShowOrder.location_long);
    const end = new google.maps.LatLng(28.5244, 77.1855);
    // console.log(start.lat(), start.lng());
    const req = {
      origin: start,
      destination: end,
      travelMode: 'DRIVING'
    }
    directionsService.route(req , function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
}

import {Component, OnInit, Input, EventEmitter, Output, AfterViewInit} from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { } from '@types/googlemaps';
declare var google: any;

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  @Input() ShowOrder;
  @Input() InsideOrder;
  @Input() dishes;
  @Input() quantities;
  @Input() user;
  @Input() time_to_reach;

  @Output() naviGate = new EventEmitter<string>();
  map: google.maps.Map;
  private viewMap = false;
  public origin: any;
  public destination: any;

  constructor(private ordersService: OrdersService) {}

  ngOnInit() {
    //document.getElementById("demo").innerHTML = d;
   console.log(this.ShowOrder);
  }

  printFunction(event:any)  {
    let printData=document.getElementById('printDiv').innerHTML;
    let oldData=document.getElementById('holdprintData').innerHTML;
    document.body.innerHTML=printData;
    window.print();
    document.body.innerHTML=oldData;
    document.getElementById('exampleModal').style.display='none';
    this.naviGate.emit('Orders');
  }

  DeleteOrder(ShowOrder: Object,user: Object,InsideOrder: Object,dishes: Object,quantities: Object) {
    this.ordersService.DeleteOrder(this.user.restaurant_id, ShowOrder);
    this.ShowOrder = null;
    
  }

  myFunction(ShowOrder: Object,user: Object,InsideOrder: Object,dishes: Object,quantities: Object) {
    
    console.log("bbbbbb");
    let x3=(document.getElementById("myText"))["value"];
    console.log(x3);
     this.ordersService.table(x3,this.user.restaurant_id, ShowOrder);
  }
  UpdateOrder(order: Object , status: string) {
     console.log(status);
    this.ordersService.UpdateOrder(this.user.restaurant_id, order, status);
  }

getDirection(){
  this.origin = { lat: this.ShowOrder.location_lat, lng: this.ShowOrder.location_long };
  this.destination = { lat: 28.5244, lng: 77.1855 };
}
time1(ShowOrder:Object)
{
  var dt = new Date(this.ShowOrder.timestamp*1000);
  var d= dt.getDate();
  var m =dt.getMonth()+1;
  var y=dt.getFullYear();
  var hr = dt.getHours();
  var m1 = "0" + dt.getMinutes();
  var s = "0" + dt.getSeconds();
  return 'date : '+d+'/'+m1+'/'+y +'     time'+ hr+ ':' + m1.substr(-1) + ':' + s.substr(-2); 
}
// GOOGLE MAPS

  initMap() {
    const seeMore = document.getElementById("seeMoreBtn");
              const article = document.getElementById("map");
              
                    article.classList.toggle("expanded");
    this.viewMap = !this.viewMap;
    const directionsService = new google.maps.DirectionsService;
    const directionsDisplay = new google.maps.DirectionsRenderer;
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: {lat: this.ShowOrder.location_lat, lng: this.ShowOrder.location_long},
      mapTypeId: google.maps.MapTypeId.ROADMAP
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
        status = 'OK';
        setTimeout("status = 'OK'", 100000);
        directionsDisplay.setDirections(response);
       // window.alert('Directions request failed due to ' + status);
      }
    });
  }

  separateKyesValues(data:any,type:any){
     this.dishes=Object.keys(data);
     this.quantities=Object.values(data);
     if(type=='length')
       return this.dishes.length;
     else if(type=='loop')
       return this.dishes;
  }
}

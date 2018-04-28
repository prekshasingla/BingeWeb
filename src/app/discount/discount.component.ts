import {Component, Input, OnInit} from '@angular/core';
import { Discountitem} from '../models/discount.model';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {
  public OfferForm = false;
  public Discount: Discountitem;
  @Input() Restaurant;
  day;
  date; start_time ; name; end_time ; percentage;
  current_date;

  constructor(private Services: OrdersService) { }

  ngOnInit() {
  }

  findDay(date) {
    this.day = new Date(date).getDay();
    console.log(this.day);
  }

  ShowOfferForm() {
    if (this.OfferForm) {
      this.OfferForm = false;
    } else {
      this.OfferForm = true;
    }
  }

  SaveOffer(name, date , start_time , end_time , percentage ) {
    // const start = date + ' ' + this.start_time;
    // console.log(start);
    // const s = new Date(start);
    // console.log(s);
    // const st = s.getTime();
    // console.log(st);
    // this.current_date = new Date();
    // console.log(this.current_date);
    // const timestamp = this.current_date.getTime();
    // console.log(timestamp);
    //
    // if (st > timestamp){
    //   console.log('yes');
    // }
    percentage = percentage + '%';
    this.Services.SaveOffer(this.Restaurant.restaurant_id, name, date, this.day, start_time, end_time, percentage);
  }

}

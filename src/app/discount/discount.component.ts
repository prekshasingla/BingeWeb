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
  @Input() CurrentOffers;
  day;
  date; start_time ; name; end_time ; percentage;

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
    switch (this.day) {
      case 0: this.day = 'Sunday';
      break;
      case 1: this.day = 'Monday';
      break;
      case 2: this.day = 'Tuesday';
      break;
      case 3: this.day = 'Wednesday';
      break;
      case 4: this.day = 'Thursday';
      break;
      case 5: this.day = 'Friday';
      break;
      case 6: this.day = 'Saturday';
    }
    percentage = percentage + '%';
    this.Services.SaveOffer(this.Restaurant.restaurant_id, name, date, this.day, start_time, end_time, percentage);
  }

}

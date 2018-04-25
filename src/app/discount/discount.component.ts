import { Component, OnInit } from '@angular/core';
import { Discountitem} from '../models/discount.model';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {
  public OfferForm = false;
  public Discount: Discountitem;
  date; start_time ; name; end_time ; percentage;
  current_date;

  constructor() { }

  ngOnInit() {
  }

  ShowOfferForm() {
    if (this.OfferForm) {
      this.OfferForm = false;
    } else {
      this.OfferForm = true;
    }
  }

  SaveOffer(name, date , start_time , end_time , percentage ) {
    console.log(typeof (date));
    console.log(typeof (start_time));
    console.log(name, date , start_time , end_time , percentage);
    this.current_date = new Date();
    console.log(typeof (this.current_date));
    console.log();
    if (start_time > this.current_date){
      console.log('yes');
    }
  }
}

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table-booking',
  templateUrl: './table-booking.component.html',
  styleUrls: ['./table-booking.component.css']
})
export class TableBookingComponent implements OnInit {
  @Input() SelectedOrder;
  @Input() index;
  public status = new Array();
  public st;

  constructor() {
    this.status.length = 50;
  }

  ngOnInit() {
  }

  change (i) {
    // console.log(this.st);
    // console.log(i);
    this.status[i] = this.st;
    // console.log(this.status[i]);
    // for(let j=0;j<50;j++){
    //   console.log(this.status[j]);
    // }
  }

}

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() Orders;
  @Input() MenuItems;
  private f;
  hours: number;
  minutes: String;
  day: String;
  Month: String;
  Date: Number;
  dayname: Array<string> = ['SUNDAY', 'MONDAY' , 'TUESDAY', 'WEDNESDAY' , 'THURSDAY' , 'FRIDAY' , 'SATURDAY'];
  monthname: Array<string> = ['January' , 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November',
    'December'];

  constructor() { }

  ngOnInit() {
    this.getTime();
    this.f = setInterval(() => {
      this.getTime();
    }, 10000);
  }

  getTime() {
    this.hours = new Date().getHours();
    const D = new Date().getMinutes();
    this.day = this.dayname[new Date().getDay()];
    this.Month = this.monthname[new Date().getMonth()];
    this.Date = new Date().getDate();
    if ( D / 10 < 1) {
      this.minutes = '0' + D.toString();
      console.log(this.Date);
    } else {
      this.minutes = D.toString();
    }

    this.minutes += (this.hours >= 12 ? ' pm' : ' am');
    this.hours = this.hours >= 13 ? ( this.hours - 12 ) : this.hours;
  }
}

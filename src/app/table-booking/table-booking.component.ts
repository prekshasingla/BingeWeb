import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table-booking',
  templateUrl: './table-booking.component.html',
  styleUrls: ['./table-booking.component.css']
})
export class TableBookingComponent implements OnInit {
  @Input() SelectedOrder;

  constructor() { }

  ngOnInit() {
  }

}

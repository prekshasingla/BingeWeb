import { Component, OnInit } from '@angular/core';
import { OrdersService } from "../../services/orders.service";

@Component({
  selector: 'app-sixth-section',
  templateUrl: './sixth-section.component.html',
  styleUrls: ['./sixth-section.component.css']
})
export class SixthSectionComponent implements OnInit {
  name: string;
  email: string;
  message: string;

  constructor(private Service: OrdersService ) { }

  ngOnInit() {
  }

  submit() {
    console.log(this.name, this.email, this.message);
    this.Service.SubmitContact(this.name, this.email, this.message);
  }

}

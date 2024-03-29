import { Component, OnInit } from '@angular/core';
import { OrdersService} from '../services/orders.service';
import { User } from '../models/User.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public username;
  public password;
  public Id;
  public email;
  public Name;
  public phone;

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
  }

  signup(f) {
    // console.log(this.Name, this.username , this.email , this.Id , this.password , this.phone);
    if (f.valid) {
      this.ordersService.signup(this.Name, this.username , this.Id , this.email , this.password , this.phone);
    }

  }

}

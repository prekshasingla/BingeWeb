import { Component, OnInit } from '@angular/core';
import { OrdersService} from '../services/orders.service';
import { User } from '../models/User.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public user: User;
  public username;
  public password;
  public Id;

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
  }

  signup(username: string , password: string , Id: string) {
    this.ordersService.signup(username, password , Id);

  }

}

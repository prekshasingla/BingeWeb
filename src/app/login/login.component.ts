import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { OrdersService} from '../services/orders.service';
import { User } from '../models/User.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public Users: Array<User>;
  public username: string;
  public password: string;
  @Output() LoginSuccess = new EventEmitter<User>();
  public LoginUser: User;

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    this.ordersService.getUsers().subscribe(user => {
      this.Users = user;
    });
  }

  login(username: string, password: string) {
    if (this.Users) {
      for (let i = 0 ; i < this.Users.length ; i++) {
        if (this.Users[i].username === username && this.Users[i].password === password) {
          // console.log('success');
          this.LoginUser = this.Users[i];
          this.LoginSuccess.emit(this.Users[i]);
        }
      }
    }
  }

}

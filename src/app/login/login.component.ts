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

  login(f) {
    if (this.Users && f.valid) {
      for (let i = 0 ; i < this.Users.length ; i++) {
        if (this.Users[i].username === this.username && this.Users[i].password === this.password) {
          // console.log('success');
          this.LoginUser = this.Users[i];
          this.LoginSuccess.emit(this.Users[i]);
        }
      }
    }
  }

}

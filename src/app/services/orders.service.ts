import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Order } from '../models/order';
import { Observable} from 'rxjs/Observable';
import { User } from '../models/User.model';
import { Menu } from '../models/menu-item.model';

@Injectable()
export class OrdersService {
  OrdersCollection: AngularFirestoreCollection<any>;
  UsersCollection: AngularFirestoreCollection<any>;
  UserCollection: AngularFirestoreCollection<any>;
  Orders: Observable<any[]>;
  MenuItems: Observable<any[]>;
  Users: Observable<User[]>;
  OrdersDoc: AngularFirestoreDocument<any>;
  UsersDoc: AngularFirestoreDocument<any>;
  restaurant: User[];
  menu: Menu;

  constructor(public afs: AngularFirestore) {

    this.OrdersCollection = this.afs.collection('orders/too_indian_delhi1/order');
    this.UsersCollection = this.afs.collection('login/');

    this.Users = this.afs.collection('login').valueChanges();
  }

  getOrders(restaurant_id: string) {
    this.Orders = this.afs.collection(`orders/${restaurant_id}/order`).snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;
        return data;
      });
    });
    return this.Orders;
  }

  DeleteOrder(restaurant_id: string, order) {
    // console.log(order);
    this.OrdersDoc = this.afs.doc(`orders/${restaurant_id}/order/${order.id}`);
    this.OrdersDoc.delete();
  }

  UpdateOrder(restaurant_id: string, order , status) {
    order.status = status;
    this.OrdersDoc = this.afs.doc(`orders/${restaurant_id}/order/${order.id}`);
    this.OrdersDoc.update(order);
  }

  getUsers() {
    return this.Users;
  }

  signup(username: string , password: string , Id: string) {
    console.log(username , password , Id);
    this.UserCollection = this.afs.collection('login');
    this.UserCollection.add({username: username, password: password , restaurant_id: Id});
  }

  getMenuItem(restaurant_id: string) {
    this.MenuItems = this.afs.collection(`Menu/${restaurant_id}/course 1`).snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;
        return data;
      });
    });
    return this.MenuItems;
  }

  SaveMenuItem(restaurant_id: string , title: string, desc: string, category: string , price: string , veg: number , course_type: string, serving: string) {
    // this.menu.title = title;
    // this.menu.description = desc;
    // this.menu.category = category;
    // this.menu.price = price;
    // this.menu.veg = veg;
    // this.menu.serving = serving;
    //
    // console.log(this.menu);

    console.log(title, desc , category , price , veg , course_type , serving);


    this.afs.collection(`Menu/${restaurant_id}/${course_type}`).add({
      title: title,
      description: desc,
      category: category,
      price: price,
      veg: veg,
      serving: serving
    });
  }
}

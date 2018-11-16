import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { Order } from '../models/order';
import { Observable} from 'rxjs/Rx';
import { User } from '../models/User.model';
import { Menu } from '../models/menu-item.model';

import {map} from 'rxjs/operators'


@Injectable()
export class OrdersService {
  OrdersCollection: AngularFirestoreCollection<any>;
  UsersCollection: AngularFirestoreCollection<any>;
  UserCollection: AngularFirestoreCollection<any>;
  Orders: Observable<any[]>;
  PreOrders: Observable<any[]>;
  InsideOrders: Observable<any[]>;
  MenuItems: Observable<any[]>;
  Offers: Observable<any[]>;
  Users: Observable<User[]>;
  OrdersDoc: AngularFirestoreDocument<any>;
  OrdersDoc2: AngularFirestoreDocument<any>;
  OrdersDoc3: AngularFirestoreDocument<any>;
  OrdersDoc4: AngularFirestoreDocument<any>;
  OrdersDoc5: AngularFirestoreDocument<any>;
  OrdersDoc6: AngularFirestoreDocument<any>;
  OrdersDoc7: AngularFirestoreDocument<any>;
  UsersDoc: AngularFirestoreDocument<any>;
  restaurant: User[];
  menu: Menu;

  constructor(public afs: AngularFirestore,private db: AngularFireDatabase) {
    this.UsersCollection = this.afs.collection('login/');

    this.Users = this.afs.collection('login').valueChanges();
  }

  getOrders(restaurant_id: string) {
    this.OrdersCollection = this.afs.collection(`orders/${restaurant_id}/order` , ref => ref.orderBy('location_lat' , 'asc'));
    this.Orders = this.OrdersCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;
        return data;
      });
    });
    return this.Orders;
  }

  getPreOrders(restaurant_id: string) {
    this.OrdersCollection = this.afs.collection(`orders/${restaurant_id}/PreOrder` , ref => ref.orderBy('location_lat' , 'asc'));
    this.PreOrders = this.OrdersCollection.snapshotChanges().map(changes => {      
      return changes.map(a => {
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;
        return data;        
      });
    });
    return this.PreOrders;    
  }

  getInsideOrders(restaurant_id: string) {
    this.OrdersCollection = this.afs.collection(`orders/${restaurant_id}/InsideOrder` , ref => 
    ref.orderBy('location_lat' , 'asc'));
    this.InsideOrders = this.OrdersCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;
        return data;
      });
    });
    return this.InsideOrders;
  }

  DeleteOrder(restaurant_id: string, order) {
     console.log(restaurant_id);
     console.log(order.id);
     console.log('bye');
    this.OrdersDoc = this.afs.doc(`orders/${restaurant_id}/PreOrder/${order.id}`);
    
  
   this.OrdersDoc2 = this.afs.doc(`orders/${restaurant_id}/InsideOrder/${order.id}`);
   this.OrdersDoc3 = this.afs.doc(`orders/${restaurant_id}/order/${order.id}`);
   this.OrdersDoc3.set(order);
    this.OrdersDoc.delete();
   this.OrdersDoc2.delete();
  }
  DeleteOrder2(item)
  {
    this.OrdersDoc6 = this.afs.doc(`Menu/too_indian_delhi1/course 1/${item.id}`);
    this.OrdersDoc6.delete();
  }
  table(bb:string,restaurant_id: string, order)
  {
    order.table=bb;
    this.OrdersDoc5 = this.afs.doc(`orders/${restaurant_id}/PreOrder/${order.id}`);
    this.OrdersDoc5.update(order);
  }
  UpdateOrder(restaurant_id: string, order , status) {
    order.status = status;
    this.OrdersDoc = this.afs.doc(`orders/${restaurant_id}/PreOrder/${order.id}`);
    this.OrdersDoc.update(order);
  }

  getUsers() {
    return this.Users;
  }

  signup(Name: string, username: string , Id: string , Email: string , password: string , Phone: string ) {
    console.log(username , password , Id);
    this.UserCollection = this.afs.collection('login');
    this.UserCollection.add({
      RestaurantName: Name,
      username: username,
      Email: Email,
      password: password,
      restaurant_id: Id,
      Phone: Phone
    });
  }

  getMenuItem(restaurant_id: string) {
    this.MenuItems = this.afs.collection(`menu/${restaurant_id}/Classic Cocktails/0/category`).snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;
        return data;
      });
    });
    return this.MenuItems;
  }

  SaveMenuItem(restaurant_id: string , title: string, desc: string, category: string , price: string , veg: number , course_type: string, Serving: string) {
    console.log(title, desc , category , price , veg , course_type , Serving);


    this.afs.collection(`Menu/too_indian_delhi1/course 1`).add({
      title: title,
      description: desc,
      category: category,
      price: price,
      veg: veg,
      serving: Serving
    });
  }

  SaveMenuItem2(restaurant_id: string , title:string, desc, category , price, veg , course_type, Serving,item) {
    console.log(title, desc , category , price , veg , course_type , Serving);
      item.title = title;
      item.description = desc;
      item.category = category;
      item.price = price;
      item.veg = veg;
      item.serving = Serving;
      
      this.OrdersDoc7 = this.afs.doc(`Menu/too_indian_delhi1/course 1`);
      this.OrdersDoc7.update(item);
  }

  SaveMenuItem3(restaurant_id: string ,ResId,course_type,Category,CourseMeal,Desc,Discount,gst,hasv,name,posturl,price,veg,videourl)
  {
    console.log(restaurant_id,ResId,course_type,Category,CourseMeal,Desc,Discount,gst,hasv,name,posturl,price,veg,videourl);
    this.db.database.ref(`menu/${restaurant_id}/${course_type}`).push({
      Category:Category,
      CourseMeal:CourseMeal,
      Desc:Desc,
      Discount:Discount,
      gst:gst,
      hasv:hasv,
      name:name,
      posturl:posturl,
      price:price,
      veg:veg,
      videourl:videourl
    });

  }
  SaveOffer(restaurant_id, title, date, day, start_time, end_time, discount) {
    console.log(restaurant_id, title, date, day, start_time, end_time, discount);
    this.afs.collection(`Offers/${restaurant_id}/offer`).add({
      title: title,
      date: date,
      day: day,
      start_time: start_time,
      end_time: end_time,
      discount: discount
    });
  }

  addRestaurantInfo(restaurant_id, Email , desc , Address , FacebookLink , TwitterLink , Location_lat , Location_long , ContactNo , RestaurantName) {
    this.afs.collection(`Restaurant Info`).add({
      Email: Email,
      Description: desc,
      Address: Address,
      FacebookLink: FacebookLink,
      TwitterLink: TwitterLink,
      Latitude: Location_lat,
      Longitude: Location_long,
      Contact: ContactNo,
      RestaurantName: RestaurantName
    });
  }

  getOffers(restaurant_id) {
    this.Offers = this.afs.collection(`Offers/${restaurant_id}/offer`).snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;
        return data;
      });
    });
    return this.Offers;

  }

  SubmitContact(name: string, email: string, message: string){
    console.log(name,email,message);
    this.afs.collection('ContactUs/').add({
      Email: email,
      Name: name,
      Message: message
    });
  }
}

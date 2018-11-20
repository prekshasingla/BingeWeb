import {Component, Input, OnInit, EventEmitter, Output, AfterViewInit} from '@angular/core';
import { Menu } from '../models/menu-item.model';
import { OrdersService } from '../services/orders.service';
import { FormGroup, FormBuilder , Validators } from '@angular/forms';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  public MenuForm = false;
  myForm:FormGroup;
  public MenuForm2 =false;
  title; desc; category; price; course_type; Serving; veg;
  ResId;Type;Category;CourseMeal;Desc;Discount;gst;hasv;name;posturl;videourl;
  @Input() Restaurant;
  @Input() Menu;
  @Input() Menu2;
  @Input() ShowOrder;
  @Input() InsideOrder;
  @Input() dishes;
  @Input() quantities;
  @Input() item;
  @Input() time_to_reach;
  constructor(private orderService: OrdersService,public fb:FormBuilder) {
    this.myForm=fb.group(
      {
        'course_type':['',Validators.required],
        'Category':['',Validators.required],
        'CourseMeal':['',Validators.required],
        'Desc':['',Validators.required],
        'Discount':['',Validators.required],
        'gst':['',Validators.required],
        'hasv':['',Validators.required],
        'name':['',Validators.required],
        'posturl':['',Validators.required],
        'price':['',Validators.required],
        'veg/non-veg':['',Validators.required],
        'videourl':['',Validators.required]
      }
    )
   }

  ngOnInit() {
    console.log("ans");
    console.log(this.item);
    console.log(this.Restaurant);
    console.log(this.Restaurant.password);
    console.log(this.Menu2);
    console.log(this.Menu2[0][0].category);
    console.log(this.Menu2[4]);
  }

  ShowMenuForm() {
    console.log(this.MenuForm);
    if (this.MenuForm) {
      this.MenuForm = false;
    } else {
      this.MenuForm = true;
    }
  }
  DeleteOrder(item :Object)
  {
    console.log(item);
    this.orderService.DeleteOrder2(item);
    this.item = null;
  }
  edit(item :Object)
  {
    this.MenuForm2 = true;

  }
  SaveMenu(course_type: string,Category: string,CourseMeal: number,Desc: string,Discount: number,gst: number,hasv: string,name: string,posturl: string,price: number,veg: string,videourl: string) {
    console.log(Category,CourseMeal,Desc,Discount,gst,hasv,name,posturl,price,veg,videourl);
    var a=(document.getElementById('CourseMeal'))["value"];
      CourseMeal=parseInt(a);
      var b=(document.getElementById('Discount'))["value"];
      Discount=parseInt(b);
      var c=(document.getElementById('gst'))["value"];
      gst=parseInt(c);
      if (veg === '1') {
        if(hasv=='0')
        {
        this.orderService.SaveMenuItem3(this.Restaurant.restaurant_id ,course_type,Category,CourseMeal,Desc,Discount,gst,0,name,posturl,price,0,videourl);
        }
        else
        {
          this.orderService.SaveMenuItem3(this.Restaurant.restaurant_id ,course_type,Category,CourseMeal,Desc,Discount,gst,1,name,posturl,price,0,videourl);
  
        }
      } else {
        if(hasv=='0')
        {
        this.orderService.SaveMenuItem3(this.Restaurant.restaurant_id ,course_type,Category,CourseMeal,Desc,Discount,gst,0,name,posturl,price,1,videourl);
        }
        else{
          this.orderService.SaveMenuItem3(this.Restaurant.restaurant_id ,course_type,Category,CourseMeal,Desc,Discount,gst,1,name,posturl,price,1,videourl);
  
        }
      }
  }
  SaveMenu2(title: string, desc: string, category: string , price: string , veg: string , course_type: string, Serving: string,item: Object) {
    console.log('hero');
    console.log(title, desc , category , price , 0 , course_type , Serving);
    if (veg === '1') {
      this.orderService.SaveMenuItem2(this.Restaurant.restaurant_id , title , desc , category , price , 0 , course_type , Serving,item);
    } else {
      this.orderService.SaveMenuItem2(this.Restaurant.restaurant_id , title , desc , category , price , 1 , course_type , Serving,item);
    }
    console.log(this.title);
    this.title = '';
  }
}

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
  public Men =1;
  public 
  title; desc; category; price; course_type; Serving; veg;
  ResId;Type;Category;CourseMeal;Desc;Discount;gst;hasv;name;posturl;videourl;
  @Input() Restaurant;
  @Input() Menu;
  @Input() Menu2;
  @Input() Mek;
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
    //console.log(this.item);
    console.log(this.Mek[0].category_name);
    console.log(this.Mek[1].category_name);
    console.log(this.Restaurant);
    console.log(this.Restaurant.password);
    console.log(this.Menu2);
    console.log(this.Menu2[1][0].category);
   // console.log(this.Menu2[4].getKey);
   // console.log(this.Menu2[2][0].id);
    
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
  toggleState1(i,j :number,k :number,Menu2 :object)
  {
    this.Men = 0;
    console.log(i);
    console.log(j,k,Menu2[j]);
    if(i==0)
    {
      console.log('hi');
      if(j==0)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2,'Classic Cocktails');
      }
      if(j==1)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2,'Desserts');
      }
      if(j==2)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2,'Mocktails');
      }
      if(j==3)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2,'Starters');
      }
    //this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2);
    }
    else
    {
      console.log('hi2');
      if(j==0)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,0,j,k,Menu2,'Classic Cocktails');
      }
      if(j==1)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,0,j,k,Menu2,'Desserts');
      }
      if(j==2)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,0,j,k,Menu2,'Mocktails');
      }
      if(j==3)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,0,j,k,Menu2,'Starters');
      }
      //this.orderService.toggle(this.Restaurant.restaurant_id,0,j,k,Menu2);
    }
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
        this.MenuForm=false;
        }
        else
        {
          this.orderService.SaveMenuItem3(this.Restaurant.restaurant_id ,course_type,Category,CourseMeal,Desc,Discount,gst,1,name,posturl,price,0,videourl);
          this.MenuForm=false;
        }
      } else {
        if(hasv=='0')
        {
        this.orderService.SaveMenuItem3(this.Restaurant.restaurant_id ,course_type,Category,CourseMeal,Desc,Discount,gst,0,name,posturl,price,1,videourl);
        this.MenuForm=false;
        }
        else{
          this.orderService.SaveMenuItem3(this.Restaurant.restaurant_id ,course_type,Category,CourseMeal,Desc,Discount,gst,1,name,posturl,price,1,videourl);
          this.MenuForm=false;
  
        }
        this.MenuForm=false;
      }
  }
  SaveMenu2(title: string, desc: string, category: string , price: string , veg: string , course_type: string, Serving: string,item: Object) {
    console.log('hero');
    console.log(title, desc , category , price , 0 , course_type , Serving);
    if (veg === '1') {
      this.orderService.SaveMenuItem2(this.Restaurant.restaurant_id , title , desc , category , price , 0 , course_type , Serving,item);
      this.category = '';
    } else {
      this.orderService.SaveMenuItem2(this.Restaurant.restaurant_id , title , desc , category , price , 1 , course_type , Serving,item);
    }
    console.log(this.title);
    this.category = '';
  }
}

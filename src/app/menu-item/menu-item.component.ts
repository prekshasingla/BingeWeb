import {Component, Input, OnInit, EventEmitter, Output, AfterViewInit} from '@angular/core';
import { Menu } from '../models/menu-item.model';
import { OrdersService } from '../services/orders.service';
import { FormGroup, FormBuilder , Validators } from '@angular/forms';
import Swa1 from 'sweetalert2';
@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  public MenuForm = false;
  myForm:FormGroup;
  myForm3:FormGroup;
  public MenuForm2 =false;
  //public Men =1;
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
    this.myForm3=fb.group(
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
   // console.log(this.Menu2[1][0]._id);
    //console.log(this.Menu2[1][0].id);
    console.log(this.Menu2[0].length);
    console.log('ds')
    console.log(this.Menu2[0].length());
    //console.log(this.Menu2[8]);
    //console.log(this.Menu2[8].restaurant_id);
    //console.log(this.Menu2.restaurant_id);
   // console.log(this.Menu2[1][0].category.$Key);
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
  del1(j :number,k :number,Menu2 :object)
  {
    Swa1({
      title:'are usure u want to remove this?',
      text:"u won't be able to revert this!",
      type:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'yes,remove it!'
    }).then((result)=>
    {
      if(result.value)
      {
        if(Menu2[8]=='38_barracks')
        {
          if(j==0)
      {
        console.log('hahahahahallll');
        this.orderService.del1(this.Restaurant.restaurant_id,j,k,Menu2,'Classic Cocktails');
      }
      if(j==1)
      {
        console.log('hahahahahallggg');
        this.orderService.del1(this.Restaurant.restaurant_id,j,k,Menu2,'Desserts');
      }
      if(j==2)
      {
        this.orderService.del1(this.Restaurant.restaurant_id,j,k,Menu2,'Mocktails');
      }
      if(j==3)
      {
        this.orderService.del1(this.Restaurant.restaurant_id,j,k,Menu2,'Starters');
      }
    }
    if(Menu2[8]=='ministry_of_beer')
    {
    
      console.log('hi');
      if(j==0)
      {
        this.orderService.del1(this.Restaurant.restaurant_id,j,k,Menu2,'Cocktails');
      }
      if(j==1)
      {
        this.orderService.del1(this.Restaurant.restaurant_id,j,k,Menu2,'Desserts');
      }
      if(j==2)
      {
        this.orderService.del1(this.Restaurant.restaurant_id,j,k,Menu2,'Mains');
      }
      if(j==3)
      {
        this.orderService.del1(this.Restaurant.restaurant_id,j,k,Menu2,'Starters');
      }
      if(j==4)
      {
        this.orderService.del1(this.Restaurant.restaurant_id,j,k,Menu2,'Wraps, Burgers and Sandwiches');
      }
    //this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2);
    }
    if(Menu2[7]=='am_pm')
    {
    
      console.log('hi');
      if(j==0)
      {
        this.orderService.del1(this.Restaurant.restaurant_id,j,k,Menu2,'Cocktails');
      }
      if(j==1)
      {
        this.orderService.del1(this.Restaurant.restaurant_id,j,k,Menu2,'Desserts');
      }
      if(j==2)
      {
        this.orderService.del1(this.Restaurant.restaurant_id,j,k,Menu2,'European Main Plate');
      }
      if(j==3)
      {
        this.orderService.del1(this.Restaurant.restaurant_id,j,k,Menu2,'Shakes');
      }
    //this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2);
    }
    if(Menu2[9]=='rabbit_hole')
    {
      console.log('hi');
      if(j==0)
      {
        this.orderService.del1(this.Restaurant.restaurant_id,j,k,Menu2,'Appetizers');
      }
      if(j==1)
      {
        this.orderService.del1(this.Restaurant.restaurant_id,j,k,Menu2,'Desserts');
      }
      if(j==2)
      {
        this.orderService.del1(this.Restaurant.restaurant_id,j,k,Menu2,'Main Course');
      }
      if(j==3)
      {
        this.orderService.del1(this.Restaurant.restaurant_id,j,k,Menu2,'Salad');
      }
      if(j==4)
      {
        this.orderService.del1(this.Restaurant.restaurant_id,j,k,Menu2,'Small Plates');
      }
    //this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2);
    }
    if(Menu2[3]=='axis_gurgaon')
    {
      console.log('hi');
      if(j==0)
      {
        this.orderService.del1(this.Restaurant.restaurant_id,j,k,Menu2,'Vegetarian snacks');
      }
     
    //this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2);
    }
    if(Menu2[7]=='cafe_delhi_heights')
    {
      console.log('hi');
      if(j==0)
      {
        this.orderService.del1(this.Restaurant.restaurant_id,j,k,Menu2,'Burger & Sandwiches');
      }
      if(j==1)
      {
        this.orderService.del1(this.Restaurant.restaurant_id,j,k,Menu2,'Iced and Frozen Drinks');
      }
      if(j==2)
      {
        this.orderService.del1(this.Restaurant.restaurant_id,j,k,Menu2,'Meat & Poltry');
      }
      if(j==3)
      {
        this.orderService.del1(this.Restaurant.restaurant_id,j,k,Menu2,'Veggie By Nature');
      }
    //this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2);
    }
    if(Menu2[10]=='cafe_hangout_faridabad')
    {
      console.log('hi');
      if(j==0)
      {
        this.orderService.del1(this.Restaurant.restaurant_id,j,k,Menu2,'Appetizers');
      }
      if(j==1)
      {
        this.orderService.del1(this.Restaurant.restaurant_id,j,k,Menu2,'Burgers');
      }
      if(j==2)
      {
        this.orderService.del1(this.Restaurant.restaurant_id,j,k,Menu2,'Coolers');
      }
      if(j==3)
      {
        this.orderService.del1(this.Restaurant.restaurant_id,j,k,Menu2,'Foot Longs');
      }
      if(j==4)
      {
        this.orderService.del1(this.Restaurant.restaurant_id,j,k,Menu2,'Pastas and Salads');
      }
      if(j==5)
      {
        this.orderService.del1(this.Restaurant.restaurant_id,j,k,Menu2,'Pizzas n\'breads');
      }
      if(j==6)
      {
        this.orderService.del1(this.Restaurant.restaurant_id,j,k,Menu2,'Sandwiches');
      }
      if(j==7)
      {
        this.orderService.del1(this.Restaurant.restaurant_id,j,k,Menu2,'Wraps n\'more');
      }
    //this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2);
    }
    if(Menu2[6]=='informal_janpath')
    {
      console.log('hi');
      if(j==0)
      {
        this.orderService.del1(this.Restaurant.restaurant_id,j,k,Menu2,'Homemade Ravioli & Risotto');
      }
      if(j==1)
      {
        this.orderService.del1(this.Restaurant.restaurant_id,j,k,Menu2,'Oriental');
      }
      if(j==2)
      {
        this.orderService.del1(this.Restaurant.restaurant_id,j,k,Menu2,'Waffle Burger');
      }
     
    //this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2);
    }
  }
})

        
  }
  baba(j,k,Menu2 :object)
  {
    this.myForm3.controls.course_type.setValue(this.Menu2[j][k].course_type);
    this.myForm3.controls.Category.setValue(this.Menu2[j][k].Category);
    this.myForm3.controls.CourseMeal.setValue(this.Menu2[j][k].CourseMeal);
    this.myForm3.controls.Desc.setValue(this.Menu2[j][k].Desc);
    this.myForm3.controls.Discount.setValue(this.Menu2[j][k].Discount);
    this.myForm3.controls.gst.setValue(this.Menu2[j][k].gst);
    this.myForm3.controls.hasv.setValue(this.Menu2[j][k].hasv);
    this.myForm3.controls.name.setValue(this.Menu2[j][k].name);
    this.myForm3.controls.posturl.setValue(this.Menu2[j][k].posturl);
    this.myForm3.controls.price.setValue(this.Menu2[j][k].price);
    this.myForm3.controls.videourl.setValue(this.Menu2[j][k].videourl);

  }
  toggleState1(i,j :number,k :number,Menu2 :object)
  {
   // this.Men = 0;
   // console.log(i);
    console.log(Menu2[9]);
  //  console.log('babababababab');
    if(Menu2[8]=='38_barracks')
    {
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
  if(Menu2[8]=='ministry_of_beer')
    {
    if(i==0)
    {
      console.log('hi');
      if(j==0)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2,'Cocktails');
      }
      if(j==1)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2,'Desserts');
      }
      if(j==2)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2,'Mains');
      }
      if(j==3)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2,'Starters');
      }
      if(j==4)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2,'Wraps, Burgers and Sandwiches');
      }
    //this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2);
    }
    else
    {
      console.log('hi2');
      if(j==0)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,0,j,k,Menu2,'Cocktails');
      }
      if(j==1)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,0,j,k,Menu2,'Desserts');
      }
      if(j==2)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,0,j,k,Menu2,'Mains');
      }
      if(j==3)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,0,j,k,Menu2,'Starters');
      }
      if(j==4)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,0,j,k,Menu2,'Wraps, Burgers and Sandwiches');
      }
      //this.orderService.toggle(this.Restaurant.restaurant_id,0,j,k,Menu2);
    }
  }
  if(Menu2[7]=='am_pm')
    {
    if(i==0)
    {
      console.log('hi');
      if(j==0)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2,'Cocktails');
      }
      if(j==1)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2,'Desserts');
      }
      if(j==2)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2,'European Main Plate');
      }
      if(j==3)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2,'Shakes');
      }
    //this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2);
    }
    else
    {
      console.log('hi2');
      if(j==0)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,0,j,k,Menu2,'Cocktails');
      }
      if(j==1)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,0,j,k,Menu2,'Desserts');
      }
      if(j==2)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,0,j,k,Menu2,'European Main Plate');
      }
      if(j==3)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,0,j,k,Menu2,'Shakes');
      }
      //this.orderService.toggle(this.Restaurant.restaurant_id,0,j,k,Menu2);
    }
  }
  if(Menu2[8]=='rabbit_hole')
    {
      console.log("sdjkbvsdjkb");
      console.log(i);
    if(i==0)
    {
      console.log('hi');
      if(j==0)
      {
        console.log("sdjkbvsdjkb");
      console.log(i);
        this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2,'Appetizers');
      }
      if(j==1)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2,'Desserts');
      }
      if(j==2)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2,'Main Course');
      }
      if(j==3)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2,'Salad');
      }
      if(j==4)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2,'Small Plates');
      }
    //this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2);
    }
    else
    {
      console.log('hi2');
      if(j==0)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,0,j,k,Menu2,'Appetizers');
      }
      if(j==1)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,0,j,k,Menu2,'Desserts');
      }
      if(j==2)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,0,j,k,Menu2,'Main Course');
      }
      if(j==3)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,0,j,k,Menu2,'Salad');
      }
      if(j==4)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,0,j,k,Menu2,'Small Plates');
      }
      //this.orderService.toggle(this.Restaurant.restaurant_id,0,j,k,Menu2);
    }
  }
  if(Menu2[3]=='axis_gurgaon')
    {
    if(i==0)
    {
      console.log('hi');
      if(j==0)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2,'Vegetarian snacks');
      }
     
    //this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2);
    }
    else
    {
      console.log('hi2');
      if(j==0)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,0,j,k,Menu2,'Vegetarian snacks');
      }
      
      //this.orderService.toggle(this.Restaurant.restaurant_id,0,j,k,Menu2);
    }
  }
  if(Menu2[7]=='cafe_delhi_heights')
    {
    if(i==0)
    {
      console.log('hi');
      if(j==0)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2,'Burger & Sandwiches');
      }
      if(j==1)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2,'Iced and Frozen Drinks');
      }
      if(j==2)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2,'Meat & Poltry');
      }
      if(j==3)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2,'Veggie By Nature');
      }
    //this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2);
    }
    else
    {
      console.log('hi2');
      if(j==0)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,0,j,k,Menu2,'Burger & Sandwiches');
      }
      if(j==1)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,0,j,k,Menu2,'Iced and Frozen Drinks');
      }
      if(j==2)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,0,j,k,Menu2,'Meat & Poltry');
      }
      if(j==3)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,0,j,k,Menu2,'Veggie By Nature');
      }
      //this.orderService.toggle(this.Restaurant.restaurant_id,0,j,k,Menu2);
    }
  }
  if(Menu2[10]=='cafe_hangout_faridabad')
    {
    if(i==0)
    {
      console.log('hi');
      if(j==0)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2,'Appetizers');
      }
      if(j==1)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2,'Burgers');
      }
      if(j==2)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2,'Coolers');
      }
      if(j==3)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2,'Foot Longs');
      }
      if(j==4)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2,'Pastas and Salads');
      }
      if(j==5)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2,'Pizzas n\'breads');
      }
      if(j==6)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2,'Sandwiches');
      }
      if(j==7)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2,'Wraps n\'more');
      }
    //this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2);
    }
    else
    {
      console.log('hi2');
      if(j==0)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,0,j,k,Menu2,'Appetizers');
      }
      if(j==1)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,0,j,k,Menu2,'Burgers');
      }
      if(j==2)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,0,j,k,Menu2,'Coolers');
      }
      if(j==3)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,0,j,k,Menu2,'Foot Longs');
      }
      if(j==4)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,0,j,k,Menu2,'Pastas and Salads');
      }
      if(j==5)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,0,j,k,Menu2,'Pizzas n\'breads');
      }
      if(j==6)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,0,j,k,Menu2,'Sandwiches');
      }
      if(j==7)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,0,j,k,Menu2,'Wraps n\'more');
      }
      //this.orderService.toggle(this.Restaurant.restaurant_id,0,j,k,Menu2);
    }
  }
  if(Menu2[6]=='informal_janpath')
    {
    if(i==0)
    {
      console.log('hi');
      if(j==0)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2,'Homemade Ravioli & Risotto');
      }
      if(j==1)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2,'Oriental');
      }
      if(j==2)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2,'Waffle Burger');
      }
     
    //this.orderService.toggle(this.Restaurant.restaurant_id,1,j,k,Menu2);
    }
    else
    {
      console.log('hi2');
      if(j==0)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,0,j,k,Menu2,'Homemade Ravioli & Risotto');
      }
      if(j==1)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,0,j,k,Menu2,'Oriental');
      }
      if(j==2)
      {
        this.orderService.toggle(this.Restaurant.restaurant_id,0,j,k,Menu2,'Waffle Burger');
      }
      //this.orderService.toggle(this.Restaurant.restaurant_id,0,j,k,Menu2);
    }
  }
  }
  SaveMenu(Menu2 :object,course_type: string,Category: string,CourseMeal: number,Desc: string,Discount: number,gst: number,hasv: string,name: string,posturl: string,price: number,veg: string,videourl: string) {
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
        this.orderService.SaveMenuItem3(Menu2,this.Restaurant.restaurant_id ,course_type,Category,CourseMeal,Desc,Discount,gst,0,name,posturl,price,0,videourl);
        this.MenuForm=false;
        }
        else
        {
          this.orderService.SaveMenuItem3(Menu2,this.Restaurant.restaurant_id ,course_type,Category,CourseMeal,Desc,Discount,gst,1,name,posturl,price,0,videourl);
          this.MenuForm=false;
        }
      } else {
        if(hasv=='0')
        {
        this.orderService.SaveMenuItem3(Menu2,this.Restaurant.restaurant_id ,course_type,Category,CourseMeal,Desc,Discount,gst,0,name,posturl,price,1,videourl);
        this.MenuForm=false;
        }
        else{
          this.orderService.SaveMenuItem3(Menu2,this.Restaurant.restaurant_id ,course_type,Category,CourseMeal,Desc,Discount,gst,1,name,posturl,price,1,videourl);
          this.MenuForm=false;
  
        }
        this.MenuForm=false;
      }
  }
  SaveMenu2(j :number,k :number,Menu2 :object,course_type: string,Category: string,CourseMeal: number,Desc: string,Discount: number,gst: number,hasv: string,name: string,posturl: string,price: number,veg: string,videourl: string) {
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
        this.orderService.SaveMenuItem4(j,k,Menu2,this.Restaurant.restaurant_id ,course_type,Category,CourseMeal,Desc,Discount,gst,0,name,posturl,price,0,videourl);
        this.MenuForm=false;
        }
        else
        {
          this.orderService.SaveMenuItem4(j,k,Menu2,this.Restaurant.restaurant_id ,course_type,Category,CourseMeal,Desc,Discount,gst,1,name,posturl,price,0,videourl);
          this.MenuForm=false;
        }
      } else {
        if(hasv=='0')
        {
        this.orderService.SaveMenuItem4(j,k,Menu2,this.Restaurant.restaurant_id ,course_type,Category,CourseMeal,Desc,Discount,gst,0,name,posturl,price,1,videourl);
        this.MenuForm=false;
        }
        else{
          this.orderService.SaveMenuItem4(j,k,Menu2,this.Restaurant.restaurant_id ,course_type,Category,CourseMeal,Desc,Discount,gst,1,name,posturl,price,1,videourl);
          this.MenuForm=false;
  
        }
        this.MenuForm=false;
      }
  }
}

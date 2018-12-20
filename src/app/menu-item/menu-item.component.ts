import {Component, Input, OnInit, EventEmitter, Output, AfterViewInit} from '@angular/core';
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
  myForm3:FormGroup;
  public MenuForm2 =false;
  sussMsg: string;
  //public Men =1;
  public 
  title; desc; category; price; course_type; Serving; veg;
  ResId;Type;Category;CourseMeal;Desc;Discount;gst;hasv;name;posturl;videourl;
  @Input() Restaurant;
  @Input() Menu;
  @Input() Menu2;
  @Input() nn;
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
        'posturl':[''],
        'price':['',Validators.required],
        'veg/non-veg':['',Validators.required],
        'videourl':['']
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
    console.log(this.nn);
    console.log(this.nn.restaurant_id);
    console.log(this.nn.Starters);
   // console.log(this.nn.type);
   // console.log(this.nn[7].value);
   //console.log(this.nn.payload);
 //   console.log(this.nn.payload.val());
    //console.log(this.nn[7].id);
    console.log('hh');
    //console.log(this.nn.$key);
    console.log('sdfsadf');
   // console.log(this.nn[1].key);
  //  console.log(this.nn[1].$key);
    console.log(this.nn.Desserts[1]);
    console.log(this.nn.Starters[4].category);
   // console.log(this.Menu2[1][0]._id);
    //console.log(this.Menu2[1][0].id);
   // console.log(this.Menu2[0].length);
    console.log('ds')
   // console.log(this.Menu2[0].length());
    //Menu2[0].length; classic cocktail ke length
    //console.log(this.Menu2[8]);
    //console.log(this.Menu2[8].restaurant_id);
    //console.log(this.Menu2.restaurant_id);
   // console.log(this.Menu2[1][0].category.$Key);
   // console.log(this.Menu2[4].getKey);
   // console.log(this.Menu2[2][0].id);
    
  }
  checkQuestions() {
    var hasv=(document.getElementById('hasv'))["value"];
    console.log(hasv);
    if (hasv==1) { // your question said "more than one element"
      return true;
     }
     else {
      return false;
     }
   }
  ShowMenuForm() {
    console.log(this.MenuForm);
    this.sussMsg='';
    if (this.MenuForm) {
      this.MenuForm = false;
      
    } else {
      this.MenuForm = true;
    }
  }
  
  SaveMenu(Menu2 :object,course_type: string,Category: string,CourseMeal: number,Desc: string,Discount: number,gst: number,hasv: string,name: string,posturl: string,price: number,veg: string,videourl: string) 
  {
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
        this.sussMsg='Added successfully';
        
        setTimeout(()=>
      {
        this.sussMsg='';
      },10000)
       // this.MenuForm=false;
        }
        else
        {
          this.orderService.SaveMenuItem3(Menu2,this.Restaurant.restaurant_id ,course_type,Category,CourseMeal,Desc,Discount,gst,1,name,posturl,price,0,videourl);
          this.sussMsg='Added successfully';
          
        setTimeout(()=>
      {
        this.sussMsg='';
      },10000)
      
          // this.MenuForm=false;
        }
      } else {
        if(hasv=='0')
        {
        this.orderService.SaveMenuItem3(Menu2,this.Restaurant.restaurant_id ,course_type,Category,CourseMeal,Desc,Discount,gst,0,name,posturl,price,1,videourl);
        this.sussMsg='Added successfully';
        
        setTimeout(()=>
      {
        this.sussMsg='';
      },10000)
      
        //this.MenuForm=false;
        }
        else{
          this.orderService.SaveMenuItem3(Menu2,this.Restaurant.restaurant_id ,course_type,Category,CourseMeal,Desc,Discount,gst,1,name,posturl,price,1,videourl);
          this.sussMsg='Added successfully';
          
        setTimeout(()=>
      {
        this.sussMsg='';
      },10000)
      
          //this.MenuForm=false;
  
        }
        //this.MenuForm=false;
      }
      this.myForm.reset();
      this.myForm.controls.course_type.setValue(course_type);
     // (document.getElementById('course_type'))["value"]=course_type;
     /* (document.getElementById('course_type'))["value"]='';
      (document.getElementById('Category'))["value"]='';
      (document.getElementById('Desc'))["value"]='';
      (document.getElementById('hasv'))["value"]='';
      (document.getElementById('name'))["value"]='';
      (document.getElementById('posturl'))["value"]='';
      (document.getElementById('Price'))["value"]='';
      (document.getElementById('gst'))["value"]='';
      (document.getElementById('veg-nonveg'))["value"]='';
      (document.getElementById('videourl'))["value"]='';
      (document.getElementById('Discount'))["value"]='';*/
  }
 
}

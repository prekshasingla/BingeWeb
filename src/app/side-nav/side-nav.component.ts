import { Component, OnInit,Input } from '@angular/core';

import {AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs';

declare var jquery:any;
declare var $:any;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
  providers: [AngularFireDatabase]
})

export class SideNavComponent implements OnInit {
  @Input() category;
  navEle : Observable<any[]>;
  activeMenu : null;
  
  constructor(db: AngularFireDatabase) {
    this.navEle = db.list('categories').valueChanges();
  }

  setActive(cat){
    this.activeMenu = cat;
  }

  ngOnInit() {        
  
  }

  ngAfterViewInit(){
   
  }
  
  navEleClick(res){
    console.log('navcli '+res);
    res=res.toLowerCase();
    var ele = "[id='"+res+"']"; //selecting using this so that id's with spaces can be used    
    var selectedDiv=$(ele);    
    $('body, html').animate({ scrollTop: selectedDiv.offset().top-250 }, 500);
  }
  
}

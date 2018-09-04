import { Component, OnInit } from '@angular/core';

import {AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs';

declare var jquery:any;
declare var $:any;

@Component({
  selector: 'app-category-cards',
  templateUrl: './category-cards.component.html',
  styleUrls: ['./category-cards.component.css'],
  providers: [AngularFireDatabase]
})

export class CategoryCardsComponent implements OnInit {
  navEle : Observable<any[]>;
  activeMenu : null;

  constructor(db: AngularFireDatabase) {
    this.navEle = db.list('categories').valueChanges();
  }

  setActive(menuItem){
    this.activeMenu = menuItem;
  }
  ngOnInit() {
  }

  navEleClick(res){
    res=res.toLowerCase();
    var ele = "[id='"+res+"']"; //selecting using this so that id's with spaces can be used
    const selectedDiv=$(ele);
    console.log(res);
  }
}

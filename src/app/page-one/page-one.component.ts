import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { snapshotChanges } from 'angularfire2/database';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit {
  @Input() user;
  @Output() Feature = new EventEmitter<string>();
  catName:String;
  pm;
  constructor(private route:ActivatedRoute) {
    this.catName=this.route.snapshot.paramMap.get('catName');    //reciving data for navigation selection
    this.pm= this.catName
    console.log(this.pm);
    console.log('page one'+this.catName);
   }

  ngOnInit() {
  }

  featureSelected(str: string) {
    this.Feature.emit(str);
  }

}

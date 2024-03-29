import { DomSanitizer } from '@angular/platform-browser';
import {AngularFireDatabase} from 'angularfire2/database';
import { Observable, Subject, from, of} from 'rxjs';
import { Component,ElementRef, NgZone, OnInit, ViewChild,OnChanges,Input } from '@angular/core';


declare var jquery:any;
declare var $:any;

@Component({
  selector: 'app-page-two-right-data',
  templateUrl: './page-two-right-data.component.html',
  styleUrls: ['./page-two-right-data.component.css'],
  providers: [AngularFireDatabase]
})

export class PageTwoRightDataComponent implements OnChanges {
  @Input() restroId; 

  restroDetail;
  restroKeys:Observable<String[]>;
  videoLink;
  
  constructor(private db: AngularFireDatabase,private _sanitizer: DomSanitizer) {

  }

  ngOnChanges() {
    this.db.list('menu', ref => ref.orderByChild('restaurant_id').equalTo(this.restroId)).valueChanges().subscribe((keys)=>{
      var lev1=keys[0]; 
      delete lev1['longitude'];
      delete lev1['restaurant_id'];
      delete lev1['restaurant_name'];
      delete lev1['latitude'];    

      var rKeys=Object.keys(lev1);            
      this.restroKeys=of(rKeys);   

      this.restroDetail = keys[0];
    });    
  }

  changeTopVideo(video_url){
    var vid_url ="https://www.youtube.com/embed/"+video_url+"?rel=0";    
    $('#videoTop').attr('src',vid_url);   
    
  }

}

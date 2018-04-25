import {Component, EventEmitter, OnInit, Output , Input} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() user;
  @Output() Feature = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  featureSelected(str: string) {
    this.Feature.emit(str);
  }

}

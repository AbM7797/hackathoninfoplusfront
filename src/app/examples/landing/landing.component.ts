import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
  isImageAvailable : boolean = true;
  isVideoAvailable : boolean = false;

  constructor() { }

  ngOnInit() {
    console.log('this.isImageAvailable' + this.isImageAvailable)
   console.log('isVideoAvailable' + this.isVideoAvailable)
  }
  onChangeToVideo(){
    this.isImageAvailable = false;
    this.isVideoAvailable = true;
  }
  onVideoToImage(){
    this.isImageAvailable = true;
    this.isVideoAvailable = false;
  }
}

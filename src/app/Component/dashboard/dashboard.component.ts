// import { Component } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
isMenuOpen= false;
contentMargin = 300;

menuToggle(){
  this.isMenuOpen =!this.isMenuOpen;

  if (this.isMenuOpen){
    this.contentMargin=300;
  }else{
    this.contentMargin=70;
  }
}
}

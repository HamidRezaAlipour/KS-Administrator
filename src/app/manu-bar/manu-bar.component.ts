import { Component, OnInit, ViewChild } from '@angular/core';
import { container } from '@angular/core/src/render3';
import { $ } from 'protractor';

@Component({
  selector: 'app-manu-bar',
  templateUrl: './manu-bar.component.html',
  styleUrls: ['./manu-bar.component.css']
})
export class ManuBarComponent implements OnInit {
  @ViewChild('SideBar') SideBarDiv;
  @ViewChild('Content') Content;
  public WideSide = true;
  constructor() { }
  ngOnInit() {
  }
  ToggleMenu() {
    if ( this.WideSide ) {
    this.SideBarDiv.nativeElement.classList.add('SmallSideBar');
    this.SideBarDiv.nativeElement.classList.remove('WideSideBar');
    this.Content.nativeElement.classList.add('Widecontent');
    this.Content.nativeElement.classList.remove('Smallcontent');
    } else {
      this.SideBarDiv.nativeElement.classList.add('WideSideBar');
      this.SideBarDiv.nativeElement.classList.remove('SmallSideBar');
      this.Content.nativeElement.classList.add('Smallcontent');
      this.Content.nativeElement.classList.remove('Widecontent');
     }
    this.WideSide = !this.WideSide;
  }
}

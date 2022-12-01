import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   @Output() istoggle=new EventEmitter()
   isopen:boolean=true
  constructor() { }

  ngOnInit(): void {
  }
  toggle(){
 this.isopen=!this.isopen
 this.istoggle.emit(this.isopen)
  }
}

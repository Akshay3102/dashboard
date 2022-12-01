import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggle:boolean=true
  title = 'dashboard-project';
  isToggle(event:any){
 this.toggle=event
 console.log(this.toggle);
 setTimeout(()=>{
  window.dispatchEvent(
    new Event('resize')
  )
},300);
 
  }
}

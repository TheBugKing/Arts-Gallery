import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'graphics-design';
  public show=false;

  shownav(){
    this.show = ! this.show;
  }
}

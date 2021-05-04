import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Global } from './global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simmi';

  public isMenuCollapsed = true;
constructor(public router: Router){
  new Global();
}
}

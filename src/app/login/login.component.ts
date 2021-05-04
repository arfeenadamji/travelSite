import { Password } from './../../interfaces/data';
import { Component, Injectable, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Global } from '../global';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
@Injectable()
export class LoginComponent implements OnInit {


  constructor(public router: Router, public route: ActivatedRoute, public passser: DataService) { }
  uname: string;
  data: Password;

  public isMenuCollapsed = true;
  // public array = [{ email: 'test', password: 'test' }, { email: 'test1', password: 'test1' }, { email: 'test2', password: 'test2' }];
  public email;
  public pass;

  ngOnInit() {
    this.uname = this.route.snapshot.params.id;
    this.passser.getpassword()
      .subscribe(data => {
        this.data = data;
      });
  }

  onPress(): any {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.data.data.length; i++) {
      if (this.email == this.data.data[i].username && this.pass == this.data.data[i].password) {
        this.passser.onPress();
        // console.log(Global.instance.login(true));
        Global.instance.login(true);
        // console.log(Global.instance.login(true));
        this.router.navigate(['/userLoggedIn', 0]);
      } else {
        this.email = '';
        this.pass = '';
      }
    }
  }
}

    // map(x => this.x * this.x)(of(1, 2, 3)).subscribe((x) => console.log(`value: ${x}`));
         // first()(of(1, 2, 3)).subscribe((v) => console.log(`value: ${v}`));

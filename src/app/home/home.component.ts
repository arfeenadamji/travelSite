import { Trip } from './../../interfaces/data';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Global } from '../global';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trid: number;
  id: number;
  data: Trip;

  isLoggedIn: boolean;
  constructor(private router: Router, private route: ActivatedRoute, private trser: DataService) { }

  ngOnInit(): void {
    console.log(this.isLoggedIn);
    this.isLoggedIn = Global.instance.isLoggedIn();
    console.log(this.isLoggedIn);
    // get the data of trip from json
    this.trid = this.route.snapshot.params.id;
    this.trser.gettrip()
      .subscribe(anydata => {
        this.data = anydata;



        // getting data from select option on maincontainer by getting id from url patameter
        this.route.params.subscribe(params => {
          this.id = params.id;
          if (params.id == null) {
            this.id = 0;
          }
        });
      });
  }

  // event emitter helper
  parentEmiiter(i) {
    // alert('Data Removed ' + name);
    // to delete data from array when delete icon press
    this.data.data.splice(i, 1);
  }
  onLogout(): any {
    // this.isMenuCollapsed = true;
    Global.instance.login(false);
    this.router.navigate(['/']);
  }
}

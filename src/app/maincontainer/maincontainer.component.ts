import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Age } from 'src/interfaces/data';
import { DataService } from '../data.service';

@Component({
  selector: 'app-maincontainer',
  templateUrl: './maincontainer.component.html',
  styleUrls: ['./maincontainer.component.scss']
})
export class MaincontainerComponent implements OnInit {

  select: Age;
  optid: Age;
  optionhandler;
  constructor(private route: ActivatedRoute, private router: Router, private ageser: DataService) { }

  ngOnInit(): void {
    this.optid = this.route.snapshot.params.id1;
    this.ageser.getage()
      .subscribe(data => {
        this.select = data;

      });
  }

  onselect($event) {
    this.optionhandler = $event.target.value;
    this.router.navigate(['/home', this.optionhandler]);
    console.log(this.optionhandler);
    console.log(this.select.age[0].agegroup);

  }

}

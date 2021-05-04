import { Data, Page } from './../../interfaces/data';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  pages: Page;
  pgid: number;

  constructor(private httpService: HttpClient, private route: ActivatedRoute, private pgser: DataService) { }
  ngOnInit() {
    // this.pgid = (this.route.snapshot.paramMap.get('id'));
    this.pgid = this.route.snapshot.params.id;
    this.pgser.getpage()
      .subscribe(data => {
        this.pages = data;
        console.log(this.pages);
      });
  }
}

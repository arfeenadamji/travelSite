import { Component, OnInit } from '@angular/core';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tempimg',
  templateUrl: './tempimg.component.html',
  styleUrls: ['./tempimg.component.scss']
})
export class TempimgComponent implements OnInit {
 images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/422/200`);
  arrBirds: string[];

  constructor(config: NgbCarouselConfig, private httpService: HttpClient) {

    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
     ngOnInit() {
this.httpService.get('../../assets/title.json').subscribe(
      data => {
        this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
      },
      // (err: HttpErrorResponse) => {
      //   console.log (err.message);
      // }
    );
    }
  }

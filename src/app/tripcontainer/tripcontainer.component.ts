import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Trip } from './../../interfaces/data';

@Component({
  selector: 'app-tripcontainer',
  templateUrl: './tripcontainer.component.html',
  styleUrls: ['./tripcontainer.component.scss']
})
export class TripcontainerComponent implements OnInit {

  // creating eventemitter to access home component(parentcomponent) to transfer data of remove button after login
  // @Output() notify: EventEmitter<string> = new EventEmitter<string>(); // simillar bellow
  @Output() greet = new EventEmitter();

  public id: number;
  data: Trip;
  trid: Trip;

  // tslint:disable-next-line: max-line-length
  @Input() trippara = 'Active, adventurous youth holiday in rugged and beautiful Slovenia. Go for an active holiday with many included activities in a top location! Incl.transport, accommodation and activities.';
  @Input() tripimg = '../../assets/images/tripcontainer1.jpg';
  @Input() tripheading = 'Solvenia';
  @Input() tripspan = '10 days';
  @Input() showDelteButton: boolean;
  @Input() testId: number; // used in home component to pass index
  // name = 'From Child';
  // showItem: boolean = true; // used for event emitter,  currently not in use, because we are using event emitter


  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    // To get data from url parameter to change when the user loged in
    // this.route.params.subscribe(params => {
    //   this.id = params.id;
    //   // console.log(this.id);
    //   if (params.id == null) {
    //     this.id = 0;
    //     // console.log(this.id);

    //   }
    // });

  }

  // child emiiter
  deletetrip() {
    this.greet.emit();
  }
  // navigate trip to page component
  onSelect() {
    this.router.navigate(['/pages', this.testId]);
  }
}

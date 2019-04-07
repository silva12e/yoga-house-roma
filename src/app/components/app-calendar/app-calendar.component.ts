import {
  Component,
  OnInit
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-calendar',
  templateUrl: './app-calendar.component.html',
  styleUrls: ['./app-calendar.component.scss'],
  animations: [
    state( 'invisible', style({
      opacity: 0
    })),
    state( 'visible', style({
      opacity: 1
    })),
    transition('invisible => visible', [
      animate('1s')
    ]),
  ],
})
export class CalendarComponent implements OnInit {
  constructor() { }

  ngOnInit() {}

  downloadClassSchedule(): void {
    window.open('https://res.cloudinary.com/eesportfolio/image/upload/v1551646370/Schedule_PDF_updated_25_feb.pdf');
  }
}

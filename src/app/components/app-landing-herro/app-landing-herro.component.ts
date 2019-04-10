import {
  Component,
  OnInit
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-landing-herro',
  templateUrl: './app-landing-herro.component.html',
  styleUrls: ['./app-landing-herro.component.scss'],
  animations: [
    trigger('initHeader', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
  ]
})
export class AppLandingHerroComponent implements OnInit {
  isPricesModalActive = false;
  isCalendarModalActive = false;
  initialState = 'hide';

  ngOnInit(): void {
    setTimeout(() => {
      this.initialState = 'show';
    }, 500);
  }

  constructor() { }

  togglePricesModal() {
    this.isPricesModalActive = !this.isPricesModalActive;
  }

  toggleCalendarModal() {
    this.isCalendarModalActive = !this.isCalendarModalActive;
  }

  goToMindBodyCalendar(): void {
    window.open('http://www.theyogahouseroma.com//mind-body-calendar', '_blank');
  }
}

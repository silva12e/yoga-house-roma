import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-herro',
  templateUrl: './app-landing-herro.component.html',
  styleUrls: ['./app-landing-herro.component.scss']
})
export class AppLandingHerroComponent {
  isPricesModalActive = false;
  isCalendarModalActive = false;

  constructor() { }

  togglePricesModal() {
    this.isPricesModalActive = !this.isPricesModalActive;
  }

  toggleCalendarModal() {
    this.isCalendarModalActive = !this.isCalendarModalActive;
  }

  goToMindBodyCalendar(): void {
    window.location.href = 'https://yoga-house-roma-test.herokuapp.com/mind-body-calendar';
  }
}

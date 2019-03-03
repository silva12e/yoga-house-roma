import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-landing-herro',
  templateUrl: './app-landing-herro.component.html',
  styleUrls: ['./app-landing-herro.component.css']
})
export class AppLandingHerroComponent implements OnInit {
  isPricesModalActive: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  togglePricesModal() {
    this.isPricesModalActive = !this.isPricesModalActive;
  }

  goToMindBodyCalendar(): void {
    // Hack to get navigation to work without failures
    window.open('http://localhost:4200/mind-body-calendar');
  }
}

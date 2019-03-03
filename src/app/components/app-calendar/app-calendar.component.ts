import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './app-calendar.component.html',
  styleUrls: ['./app-calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  downloadClassSchedule(): void {
    window.open('https://res.cloudinary.com/eesportfolio/image/upload/v1551646370/Schedule_PDF_updated_25_feb.pdf');
  }
}

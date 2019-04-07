import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-class-schedule',
  templateUrl: './class-schedule.component.html',
  styleUrls: ['./class-schedule.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('hide',   style({
        opacity: 0,
        transform: 'translateX(-100%)'
      })),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
  ]
})
export class ClassScheduleComponent {
  scheduleState = 'hide';
  @ViewChild('scheduleRef') scheduleRef: ElementRef;

   constructor(
    public el: ElementRef
  ) {}

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const contentHeight = this.scheduleRef.nativeElement.offsetTop - 1000;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= contentHeight) {
      this.scheduleState = 'show';
    }
  }

  downloadClassSchedule(): void {
    window.open('https://res.cloudinary.com/eesportfolio/image/upload/v1551646370/Schedule_PDF_updated_25_feb.pdf');
  }
}

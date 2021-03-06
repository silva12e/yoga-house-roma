import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-terms-of-services',
  templateUrl: './terms-of-services.component.html',
  styleUrls: ['./terms-of-services.component.css'],
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
export class TermsOfServicesComponent {
  tosState = 'hide';
  @ViewChild('tosRef') tosRef: ElementRef;

  constructor(
    public el: ElementRef
  ) {}

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const contentHeight = this.tosRef.nativeElement.offsetTop - 1000;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= contentHeight) {
      this.tosState = 'show';
    }
  }
}

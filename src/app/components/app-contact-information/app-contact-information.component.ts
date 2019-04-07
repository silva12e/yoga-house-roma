import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-contact-information',
  templateUrl: './app-contact-information.component.html',
  styleUrls: ['./app-contact-information.component.scss'],
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
export class AppContactInformationComponent implements OnInit {
  state = 'hide';
  contactInformationPage = {
    title: 'Contact Information'
  };

  constructor(
    public el: ElementRef
  ) { }


  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop - 1000;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= componentPosition) {
      this.state = 'show';
    }
  }

  ngOnInit() {
  }

}

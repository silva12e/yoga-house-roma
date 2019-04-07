import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-information',
  templateUrl: './app-contact-information.component.html',
  styleUrls: ['./app-contact-information.component.scss']
})
export class AppContactInformationComponent implements OnInit {
  
  contactInformationPage = {
    title: 'Contact Information'
  }

  constructor() { }

  ngOnInit() {
  }

}

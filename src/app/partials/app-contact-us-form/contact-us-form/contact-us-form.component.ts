import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { } from '@types/googlemaps';

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.css']
})
export class ContactUsFormComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;


  get f() { 
    return this.contactForm.controls; 
  }

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    // this.contactForm = this.formBuilder.group({
    //     name: ['', Validators.required],
    //     email: ['', Validators.required],
    //     subject: [''],
    //     message: ['', [Validators.required, Validators.minLength(10)]]
    // });
    var myLatLng = {};

    var mapProp = {
      center: new google.maps.LatLng(41.914493, 12.464559),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
 
    var marker = new google.maps.Marker({
      position: {lat: 41.914493, lng: 12.464559},
      map: this.map,
      title: 'Via Giuseppe Ferrari, 12, 00195 Roma RM, Italy'
    });
  }

  submit($event) {
  }
}

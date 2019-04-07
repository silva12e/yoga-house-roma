import { Component, OnInit, ViewChild } from '@angular/core';

import { } from '@types/googlemaps';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  ngOnInit() {
    const mapProp = {
      center: new google.maps.LatLng(41.914493, 12.464559),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    const marker = new google.maps.Marker({
      position: {lat: 41.914493, lng: 12.464559},
      map: this.map,
      title: 'Via Giuseppe Ferrari, 12, 00195 Roma RM, Italy'
    });
  }
}

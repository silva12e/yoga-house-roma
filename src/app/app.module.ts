// Native modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// App components
import { AppComponent } from './app.component';
import { AppLandingHerroComponent } from './components/app-landing-herro/app-landing-herro.component';
import { AppContactInformationComponent } from './components/app-contact-information/app-contact-information.component';
import { AppInformationListComponent } from './components/app-information-list/app-information-list.component';
import {
   AppInformationListItemComponent 
  } from './components/app-information-list/app-information-list-item/app-information-list-item.component';
import { NavbarComponent } from './components/app-navbar/navbar/navbar.component';
import { GoogleMapsComponent } from './partials/app-contact-us-form/google-maps/google-maps.component';
import { ContactInformationComponent } from './partials/app-contact-information/contact-information/contact-information.component';
import { ModalComponent } from './components/modal/modal.component';
import { PricesModalComponent } from './components/modal/prices/prices.modal.component';
import { CalendarComponent } from './components/app-calendar/app-calendar.component';
import { MainComponent } from './components/app-main/app-main.component';
import { FooterComponent } from './components/app-footer/app-footer.component';
import { CalendarModalComponent } from './components/modal/calendar/calendar.component';
import { ClassScheduleComponent } from './components/class-schedule/class-schedule.component';
import { TermsOfServicesComponent } from './components/terms-of-services/terms-of-services.component';

// App services
import { MessagesService } from './service/messages.service';
import { ModalService } from './service/modal/modal.service';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'mind-body-calendar', component: CalendarComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AppLandingHerroComponent,
    AppContactInformationComponent,
    AppInformationListComponent,
    AppInformationListItemComponent,
    NavbarComponent,
    GoogleMapsComponent,
    ContactInformationComponent,
    ModalComponent,
    PricesModalComponent,
    CalendarComponent,
    MainComponent,
    FooterComponent,
    TermsOfServicesComponent,
    CalendarModalComponent,
    ClassScheduleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [
    MessagesService,
    ModalService,
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

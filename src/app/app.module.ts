// Native modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Firebase imports
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

// App components
import { AppComponent } from './app.component';
import { AppLandingHerroComponent } from './components/app-landing-herro/app-landing-herro.component';
import { AppContactInformationComponent } from './components/app-contact-information/app-contact-information.component';
import { AppInformationListComponent } from './components/app-information-list/app-information-list.component';
import { AppInformationListItemComponent } from './components/app-information-list/app-information-list-item/app-information-list-item.component';
import { NavbarComponent } from './components/app-navbar/navbar/navbar.component';
import { ContactUsFormComponent } from './partials/app-contact-us-form/contact-us-form/contact-us-form.component';
import { ContactInformationComponent } from './partials/app-contact-information/contact-information/contact-information.component';
import { ModalComponent } from './components/modal/modal.component';
import { PricesModalComponent } from './components/modal/prices/prices.modal.component';
import { CalendarComponent } from './components/app-calendar/app-calendar.component';
import { MainComponent } from './components/app-main/app-main.component';
import { FooterComponent } from './components/app-footer/app-footer.component';

// App services
import { MessagesService } from './service/messages.service'
import { ModalService } from './service/modal/modal.service';

// Add to its own file
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
    ContactUsFormComponent,
    ContactInformationComponent,
    ModalComponent,
    PricesModalComponent,
    CalendarComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    AngularFireModule.initializeApp(environment.fireConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule
  ],
  providers: [
    MessagesService,
    ModalService,
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

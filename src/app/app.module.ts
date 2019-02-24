// Native modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

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

// App services
import { MessagesService } from './service/messages.service'

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [
    MessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

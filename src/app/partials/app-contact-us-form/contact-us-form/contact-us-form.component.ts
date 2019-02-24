import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MessagesService } from './../../../service/messages.service'

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.css']
})
export class ContactUsFormComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;

  get f() { 
    return this.contactForm.controls; 
  }

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        subject: [''],
        message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  submit($event) {
    this.submitted = true;
    
    if (this.contactForm.invalid) {
        return;
    }
  }
}

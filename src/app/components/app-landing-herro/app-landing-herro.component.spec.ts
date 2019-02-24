/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppLandingHerroComponent } from './app-landing-herro.component';

describe('AppLandingHerroComponent', () => {
  let component: AppLandingHerroComponent;
  let fixture: ComponentFixture<AppLandingHerroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLandingHerroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLandingHerroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

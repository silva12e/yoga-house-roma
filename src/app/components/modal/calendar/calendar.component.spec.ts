import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarModalComponent } from './calendar.component';

describe('CalendarComponent', () => {
  let component: CalendarModalComponent;
  let fixture: ComponentFixture<CalendarModal>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

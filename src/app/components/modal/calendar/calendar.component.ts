import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calendar-modal',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarModalComponent {

  @Input() isActive: boolean;
  @Output() onClose = new EventEmitter<void>();

  constructor() { }

  closeModal(): void {
    this.isActive = !this.isActive;
    this.onClose.emit();
  }
}

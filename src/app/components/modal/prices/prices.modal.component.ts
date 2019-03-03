import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-prices-modal',
  templateUrl: './prices.modal.component.html',
  styleUrls: ['./prices.modal.component.scss']
})
export class PricesModalComponent {

  @Input() isActive: boolean;
  @Output() onClose = new EventEmitter<void>();

  constructor() { }

  closeModal(): void {
    this.isActive = !this.isActive;
    this.onClose.emit();
  }
}

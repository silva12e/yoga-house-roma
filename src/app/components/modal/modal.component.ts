import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input() isActive: boolean;

  constructor() { }

  closeModal(): void {
    this.isActive = !this.isActive;
  }
}

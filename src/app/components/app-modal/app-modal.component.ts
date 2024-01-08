import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-app-modal',
  templateUrl: './app-modal.component.html',
  styleUrl: './app-modal.component.css',
})
export class AppModalComponent {
  @Input() certificate: any;

  constructor(public activeModal: NgbActiveModal) {}

  // ... Diğer kodlar

  closeModal() {
    this.activeModal.close();
  }
}

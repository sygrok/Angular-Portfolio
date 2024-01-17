import { slideToSection } from './../utils';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppModalComponent } from './components/app-modal/app-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  slideToSection(sectionId: string, offset?: number) {
    return slideToSection(sectionId, offset);
  }

  title = 'Angular-Portfolio';
}

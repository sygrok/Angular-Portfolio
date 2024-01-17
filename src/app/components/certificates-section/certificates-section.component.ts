import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppModalComponent } from '../app-modal/app-modal.component';
import { Certificates } from '../../interfaces/certificates';

@Component({
  selector: 'app-certificates-section',
  templateUrl: './certificates-section.component.html',
  styleUrl: './certificates-section.component.css',
})
export class CertificatesSectionComponent {
  constructor(private modalService: NgbModal) {}

  certificates: Certificates[] = [
    {
      id: 1,
      logo: 'fa-brands fa-react',
      name: `React - The Complete Guide (Academind by
      Maximilian Schwarzmüller) - Udemy`,
      img: '../assets/sertificates/ReactComplete.png',
    },
    {
      id: 2,
      logo: 'fa-brands fa-angular',
      name: `Frontend Web Development Training - Ministry of Labour and Social
        Security`,
      img: '../assets/sertificates/AngularBootcamp.png',
    },
    {
      id: 3,
      logo: 'fa-brands fa-angular',
      name: `Angular 401 - Turkcell Academy`,
      img: '../assets/sertificates/angular401.png',
    },
    {
      id: 4,
      logo: 'fa-brands fa-angular',
      name: `Angular 301 - Turkcell Academy`,
      img: '../assets/sertificates/angular301.png',
    },
    {
      id: 5,
      logo: 'fa-brands fa-angular',
      name: `Angular 201 - Turkcell Academy`,
      img: '../assets/sertificates/angular201.png',
    },
    {
      id: 6,
      logo: 'fa-brands fa-angular',
      name: `Angular 101 - Turkcell Academy`,
      img: '../assets/sertificates/angular101.png',
    },
    {
      id: 7,
      logo: 'fa-brands fa-react',
      name: `React 101 - Turkcell Academy`,
      img: '../assets/sertificates/react101.png',
    },
    {
      id: 8,
      logo: 'fa-brands fa-js',
      name: `Introduction to JavaScript - Sololearn`,
      img: '../assets/sertificates/Sololearn JavaScript.jpeg',
    },
    {
      id: 9,
      logo: 'fa-brands fa-css3-alt',
      name: `Introduction to CSS - Sololearn`,
      img: '../assets/sertificates/Sololearn CSS.jpeg',
    },
    {
      id: 10,
      logo: 'fa-brands fa-html5',
      name: `HTML5 & CSS3 - Turkcell Academy`,
      img: '../assets/sertificates/html5&css.png',
    },
    {
      id: 11,
      logo: 'fa-brands fa-html5',
      name: `HTML 101 - Turkcell Academy`,
      img: '../assets/sertificates/html101.png',
    },
    {
      id: 12,
      logo: 'fa-solid fa-microchip',
      name: `Introduction to Information Technologies -
      BTK Academy
      `,
      img: '../assets/sertificates/BilgiTeknolojileri.png',
    },
  ];

  openModal(certificate: any) {
    const modalRef = this.modalService.open(AppModalComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.certificate = certificate;
  }
}

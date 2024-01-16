import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from '../../../assets/particles-config';

declare let particlesJS: any; // Required to be properly interpreted by TypeScript

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  particlesJS: any;
  ngOnInit(): void {
    this.invokeParticles();
  }

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function () {});
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppModalComponent } from './components/app-modal/app-modal.component';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { CertificatesSectionComponent } from './components/certificates-section/certificates-section.component';

@NgModule({
  declarations: [AppComponent, AppModalComponent, HomeComponent, AboutMeComponent, CertificatesSectionComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

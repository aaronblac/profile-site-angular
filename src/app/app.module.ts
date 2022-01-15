import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlatformHustleComponent } from './pages/platform-hustle/platform-hustle.component';
import { SpaceShooterComponent } from './pages/space-shooter/space-shooter.component';
import { TheGreatFleeceComponent } from './pages/the-great-fleece/the-great-fleece.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { TopSectionComponent } from './components/top-section/top-section.component';
import { InfoSectionComponent } from './components/info-section/info-section.component';
import { WebDevSectionComponent } from './components/web-dev-section/web-dev-section.component';
import { GameDevSectionComponent } from './components/game-dev-section/game-dev-section.component';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNavComponent } from './components/page-nav/page-nav.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PlatformHustleComponent,
    SpaceShooterComponent,
    TheGreatFleeceComponent,
    ResumeComponent,
    TopSectionComponent,
    InfoSectionComponent,
    WebDevSectionComponent,
    GameDevSectionComponent,
    SkillsSectionComponent,
    HeaderComponent,
    ContactSectionComponent,
    FooterComponent,
    PageNavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

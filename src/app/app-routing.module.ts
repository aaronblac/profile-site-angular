import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GameDevSectionComponent } from './components/game-dev-section/game-dev-section.component';
import { HomeComponent } from './pages/home/home.component';
import { PlatformHustleComponent } from './pages/platform-hustle/platform-hustle.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { SpaceShooterComponent } from './pages/space-shooter/space-shooter.component';
import { TheGreatFleeceComponent } from './pages/the-great-fleece/the-great-fleece.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:'platform-hustle', component:PlatformHustleComponent},
  {path:'resume', component:ResumeComponent},
  {path:'space-shooter', component:SpaceShooterComponent},
  {path:'the-great-fleece', component:TheGreatFleeceComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

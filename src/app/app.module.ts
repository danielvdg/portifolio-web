import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { AboutMeComponent } from './core/about-me/about-me.component';
import { AppRoutingModule } from './app-routing.module';
import { SkillComponent } from './core/skill/skill.component';
import { ExperienceComponent } from './core/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AboutMeComponent,
    SkillComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

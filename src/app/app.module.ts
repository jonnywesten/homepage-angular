import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { NguCarouselModule } from '@ngu/carousel';

import {AppComponent} from './app.component';
import {LandingComponent} from './components/landing/landing.component';
import {PageContainerComponent} from './components/page-container/page-container.component';
import {NavMenuComponent} from './components/nav-menu/nav-menu.component';
import {AboutComponent} from './components/about/about.component';
import {SkillsComponent} from './components/skills/skills.component';
import {ContactComponent} from './components/contact/contact.component';
import {FooterComponent} from './components/footer/footer.component';
import {ProjectsComponent} from './components/projects/projects.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    PageContainerComponent,
    NavMenuComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NguCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

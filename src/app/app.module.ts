import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {LandingComponent} from './components/landing/landing.component';
import {PageContainerComponent} from './components/page-container/page-container.component';
import {NavMenuComponent} from './components/nav-menu/nav-menu.component';
import {AboutComponent} from './components/about/about.component';
import {SkillsComponent} from './components/skills/skills.component';
import {ProjetcsComponent} from './components/projetcs/projetcs.component';
import {ContactComponent} from './components/contact/contact.component';
import {FooterComponent} from './components/footer/footer.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    PageContainerComponent,
    NavMenuComponent,
    AboutComponent,
    SkillsComponent,
    ProjetcsComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

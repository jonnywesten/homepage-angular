import {BrowserModule, HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NguCarouselModule} from '@ngu/carousel';

import {AppComponent} from './app.component';
import {NavMenuComponent} from './components/nav-menu/nav-menu.component';
import {ContactComponent} from './components/contact/contact.component';
import {FooterComponent} from './components/footer/footer.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {BsModalRef, BsModalService, ModalModule} from 'ngx-bootstrap';
import {PrivacyComponent} from './components/privacy/privacy.component';
import {HeaderComponent} from './components/header/header.component';
import {MyHammerConfig} from './config/my-hammer.config';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsHeadingComponent } from './components/projects-heading/projects-heading.component';
import { LegalComponent } from './components/legal/legal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    PrivacyComponent,
    HeaderComponent,
    SkillsComponent,
    ProjectsHeadingComponent,
    LegalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NguCarouselModule,
    ModalModule.forRoot()
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    },
    BsModalRef, BsModalService
  ],
  bootstrap: [AppComponent],
  entryComponents: [PrivacyComponent, LegalComponent]
})
export class AppModule {
}

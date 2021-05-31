import {BrowserModule, HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NguCarouselModule} from '@ngu/carousel';
import { HammerModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavMenuComponent} from './components/nav-menu/nav-menu.component';
import {ContactComponent} from './components/contact/contact.component';
import {FooterComponent} from './components/footer/footer.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {BsModalRef, BsModalService, ModalModule} from 'ngx-bootstrap/modal';
import {HeaderComponent} from './components/header/header.component';
import {MyHammerConfig} from './config/my-hammer.config';
import {SkillsComponent} from './components/skills/skills.component';
import {ProjectsHeadingComponent} from './components/projects-heading/projects-heading.component';
import {ModalComponent} from './components/modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    SkillsComponent,
    ProjectsHeadingComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NguCarouselModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    HammerModule
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    },
    BsModalRef, BsModalService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule {
}

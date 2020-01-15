import {BrowserModule, HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NguCarouselModule} from '@ngu/carousel';

import {AppComponent} from './app.component';
import {NavMenuComponent} from './components/nav-menu/nav-menu.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import {FooterComponent} from './components/footer/footer.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {MyHammerConfig} from './config/my-hammer.config';
import {BsModalRef, BsModalService, ModalModule} from 'ngx-bootstrap';
import {PrivacyComponent} from './components/privacy/privacy.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    PrivacyComponent,
    HeaderComponent
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
  entryComponents: [PrivacyComponent]
})
export class AppModule {
}

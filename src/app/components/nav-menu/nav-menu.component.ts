import {Component, OnInit} from '@angular/core';
import smoothscroll from 'smoothscroll-polyfill/dist/smoothscroll.js';
import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';
import {PrivacyComponent} from '../privacy/privacy.component';
import {LanguageService} from '../../services/language.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  constructor(private ls: LanguageService,
              private bsModalRef: BsModalRef,
              private modalService: BsModalService) {
    smoothscroll.polyfill();
  }

  public open = false;
  public text = this.ls.data.menu;

  ngOnInit() {
  }

  openPrivacyModal() {
    this.open = false;
    this.bsModalRef = this.modalService.show(PrivacyComponent, {});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  scrollToElement(el): void {
    const $element = document.querySelector(el);
    $element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    this.open = false;
  }

  toggleNav() {
    this.open = !this.open;
  }
}

import {Component, OnInit} from '@angular/core';
import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';
import {LanguageService} from '../../services/language.service';
import {ScrollService} from '../../services/scroll.service';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  constructor(public ls: LanguageService,
              public scrollService: ScrollService,
              private bsModalRef: BsModalRef,
              private modalService: BsModalService) {

    this.ls.sub.subscribe((res: any) => {
      this.text = res;
    });
  }

  public open = false;
  public dropOpen = false;
  public text;

  ngOnInit() {

  }

  openModal(component: string) {
    this.open = false;
    this.bsModalRef = this.modalService.show(ModalComponent, {
      initialState: {
        text: this.text[component]
      }
    });
  }

  scrollToElement(el): void {
    this.scrollService.scrollTo(el);
    this.open = false;
  }

  toggleNav() {
    this.open = !this.open;
    this.dropOpen = false;
  }

  openDrop() {
    if (!this.dropOpen) {
      setTimeout(() => {
        this.dropOpen = true;
      });
    }
  }

  closeDrop() {
    this.dropOpen = false;
  }

  setLanguage(lang: string) {
    if (this.ls.selectedLanguage !== lang) {
      this.ls.setLanguage(lang);
      setTimeout(() => {
        this.toggleNav();
      }, 500);
    }
  }
}

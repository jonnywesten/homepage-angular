import {Component, OnInit} from '@angular/core';
import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';
import {PrivacyComponent} from '../privacy/privacy.component';
import {LanguageService} from '../../services/language.service';
import {LegalComponent} from '../legal/legal.component';
import {ScrollService} from '../../services/scroll.service';

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
      this.text = res.menu;
    });
  }

  public open = false;
  public dropOpen = false;
  public text;

  ngOnInit() {

  }
  openModal(component: string) {
    this.open = false;
    const comp = component === 'legal' ? LegalComponent : PrivacyComponent;
    this.bsModalRef = this.modalService.show(comp, {});
    this.bsModalRef.content.closeBtnName = 'Close';
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
}

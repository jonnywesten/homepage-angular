import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {LanguageService} from '../../services/language.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {

  constructor(private ls: LanguageService,
              public bsModalRef: BsModalRef) {
  }

  public text = this.ls.data.privacy;


  ngOnInit() {
  }

}

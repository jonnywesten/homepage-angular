import { Component, OnInit } from '@angular/core';
import {LanguageService} from '../../services/language.service';
import {BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.scss']
})
export class LegalComponent implements OnInit {

  constructor(private ls: LanguageService,
              public bsModalRef: BsModalRef) {
  }

  public text;

  ngOnInit() {
    this.ls.sub.subscribe((res: any) => {
      this.text = res.legal;
    });
  }

}

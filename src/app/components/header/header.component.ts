import {Component, OnInit} from '@angular/core';
import {LanguageService} from '../../services/language.service';
import {ScrollService} from '../../services/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private ls: LanguageService,
              public scrollService: ScrollService) {
  }

  public text;


  ngOnInit() {
    this.ls.sub.subscribe((res: any) => {
      this.text = res.header;
    });
  }

}

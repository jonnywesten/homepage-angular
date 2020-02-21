import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {LanguageService} from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private ls: LanguageService) {
  }

  private imgs = [];
  public text;

  ngOnInit(): void {

    this.load('me.png', 'header-bg.jpg');

    this.ls.sub.subscribe((res: any) => {

      this.text = res;

      setTimeout(() => {
        document.getElementById('loading-overlay').style.opacity = '0';
      }, 500);

      setTimeout(() => {
        document.getElementById('loading-overlay').style.display = 'none';
      }, 2000);
    });

  }

  load(...args: any[]): void {
    for (let i = 0; i < args.length; i++) {
      this.imgs[i] = new Image();
      this.imgs[i].src = args[i];
    }
  }

}

import {Component, OnInit} from '@angular/core';
import {LanguageService} from './services/language.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private ls: LanguageService) {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-out',
      delay: 100,
    });
  }

  public text;

  async ngOnInit() {

    const baseImgs = ['me.png', 'header-bg.jpg'];

    this.ls.sub.subscribe((res: any) => {

      this.text = res;
      const imgs = [];

      const eachRecursive = ((obj) => {
        for (const k in obj) {
          if (typeof obj[k] === 'object' && obj[k] !== null) {
            eachRecursive(obj[k]);
          } else {
            imgs.push('projects/' + obj[k]);
          }
        }
      });

      eachRecursive(this.text);

      imgs.filter(s => s.toString().endsWith('.jpg')).concat(baseImgs).forEach(async (el) => {
        await this.addImageProcess(el.toString());
      });

      document.getElementById('loading-overlay').style.opacity = '0';
    });
  }


  addImageProcess(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img.height);
      img.onerror = reject;
      img.src = 'assets/img/' + src;
    });
  }

}

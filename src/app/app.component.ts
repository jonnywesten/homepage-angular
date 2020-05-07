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
      once: true
    });
  }

  public text;
  private baseImgs = ['me.png', 'header-bg.jpg'];

  ngOnInit() {

    this.ls.sub.subscribe(async (res: any) => {

      this.text = res;
      await this.loadImages();
      document.getElementById('loading-overlay').style.opacity = '0';
    });
  }

  async loadImages() {

    return await new Promise((resolve) => {

      Object.entries(this.flatten(this.text))
        .map(el => 'projects/' + el[1])
        .filter(el => el.endsWith('.jpg'))
        .concat(this.baseImgs)
        .forEach(async (el, index, arr) => {

          await this.addImageProcess(el);
          if (arr.indexOf(el) === arr.length - 1) {
            resolve(true);
          }
        });
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

  flatten(obj, path = '') {
    if (!(obj instanceof Object)) {
      return {[path.replace(/\.$/g, '')]: obj};
    }
    return Object.keys(obj).reduce((output, key) => {
      return obj instanceof Array ?
        {...output, ...this.flatten(obj[key], path + '[' + key + '].')} :
        {...output, ...this.flatten(obj[key], path + key + '.')};
    }, {});
  }

}

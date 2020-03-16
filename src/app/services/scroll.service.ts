import { Injectable } from '@angular/core';
import smoothscroll from 'smoothscroll-polyfill/dist/smoothscroll';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() {
    smoothscroll.polyfill();
  }

  public scrollTo(el: string){
    const $element = document.querySelector(el);
    $element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }
}

import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() {

  }

  public scrollTo(el: string) {
    const element = document.querySelector(el);
    if (element) { element.scrollIntoView({behavior: 'smooth', block: 'start'}); }
  }
}

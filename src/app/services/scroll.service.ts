import {Injectable} from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor(private pageScrollService: PageScrollService) {

  }

  public scrollTo(el: string) {
    this.pageScrollService.scroll({
      document,
      scrollTarget: el,
    });
  }
}

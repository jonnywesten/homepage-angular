import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() {
  }

  public loaded = false;
  private imgs = new Array();


  ngOnInit(): void {

    this.load(
      'stars.jpg',
      'twinkling.png',
      'me.png'
    );
    this.loaded = true;
  }

  load(...args: any[]): void {
    for (let i = 0; i < args.length; i++) {
      this.imgs[i] = new Image();
      this.imgs[i].src = 'assets/img/' + args[i];
    }
  }

}

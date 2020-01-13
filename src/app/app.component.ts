import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() {
  }

  private imgs = new Array();


  ngOnInit(): void {

    this.load(
      'stars.png',
      'horizon.png',
      'twinkling.png',
      'me.png'
    );

    setTimeout(() => {
      document.getElementById('loading-overlay').style.opacity = '0';
    }, 500);

    setTimeout(() => {
      document.getElementById('loading-overlay').style.display = 'none';
    }, 2000);
  }

  load(...args: any[]): void {
    for (let i = 0; i < args.length; i++) {
      this.imgs[i] = new Image();
      this.imgs[i].src = args[i];
    }
  }

}

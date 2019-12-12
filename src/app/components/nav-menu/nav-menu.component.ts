import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  constructor() {
  }

  public open = false;
  public filled = false;

  public menuItems = [
    {
      title: 'Start',
      icon: 'mdi-home'
    },
    {
      title: 'About Me',
      icon: 'mdi-human-greeting'
    },
    {
      title: 'Projects',
      icon: 'mdi-apps'
    },
    {
      title: 'Contact',
      icon: 'mdi-email'
    }
  ];

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true); //third parameter
    this.scroll();
  }

  scroll = () => {
    this.filled = window.pageYOffset > window.innerHeight;
  };

  toggleNav() {
    this.open = !this.open;

    this.scroll();

    if(this.open){
      this.filled =  true;
    }

  }
}

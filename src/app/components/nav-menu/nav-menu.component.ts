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
  }

  toggleNav() {
    this.open = !this.open;
  }
}

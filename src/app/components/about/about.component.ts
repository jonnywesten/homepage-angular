import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  public skills = [
    {
      icon: 'mdi-codepen',
      title: 'Languages',
      items: ['TypeScript/JavaScript (ES6)', 'HTML', '(S)CSS', 'Java', 'PHP', 'R']
    },
    {
      icon: 'mdi-cog-clockwise',
      title: 'Tools',
      items: ['Git/SVN', 'npm', 'gulp', 'gradle', 'nginx', 'Docker', 'AWS']
    },
    {
      icon: 'mdi-electron-framework',
      title: 'Frameworks',
      items: ['Angular', 'React', 'Bootstrap', 'nodeJS', 'Spring']
    }
  ];

  ngOnInit() {
  }

}

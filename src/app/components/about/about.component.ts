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
      icon: 'mdi-language-java',
      title: 'Languages',
      items: ['JavaScript (ES6)', 'TypeScript', 'HTML', '(S)CSS', 'Java', 'PHP', 'R']
    },
    {
      icon: 'mdi-electron-framework',
      title: 'Frameworks',
      items: ['Angular', 'React', 'Bootstrap', 'nodeJS', 'Spring']
    },
    {
      icon: 'mdi-centos',
      title: 'Workflow Tools',
      items: ['Git/SVN', 'npm', 'gulp', 'gradle', 'nginx', 'Docker', 'AWS']
    }
  ];

  ngOnInit() {
  }

}

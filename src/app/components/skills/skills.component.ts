import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

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
      items: ['Angular', 'React', 'Bootstrap', 'Material Design', 'nodeJS', 'Spring']
    },
    {
      icon: 'mdi-centos',
      title: 'Worklflow',
      items: ['Git/SVN', 'npm', 'gulp', 'gradle', 'nginx', 'Docker', 'AWS']
    }
  ];

  ngOnInit() {
  }

}

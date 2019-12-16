import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  languages = ["TypeScript/JavaScript (ES6)", "HTML", "(S)CSS", "Java","PHP","R"];
  tools = ["Git/SVN","npm","gulp","gradle","nginx","Docker","AWS"];
  frameworks=["Angular", "React","Bootstrap","nodeJS","Spring"];
  cms=["Drupal", "WordPress", "Typo3"];  

  ngOnInit() {
  }

}

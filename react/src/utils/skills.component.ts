import { Component, OnInit } from '@angular/core';
import {LanguageService} from '../../services/language.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(private ls: LanguageService) { }

  public text;

  ngOnInit() {
    this.ls.sub.subscribe((res: any) => {
      this.text = res.skills;
    });
  }

}

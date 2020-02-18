import { Component, OnInit } from '@angular/core';
import {LanguageService} from '../../services/language.service';

@Component({
  selector: 'app-projects-heading',
  templateUrl: './projects-heading.component.html',
  styleUrls: ['./projects-heading.component.scss']
})
export class ProjectsHeadingComponent implements OnInit {

  constructor(private ls: LanguageService) { }

  public text = this.ls.data.projectsHeading;

  ngOnInit() {
  }

}

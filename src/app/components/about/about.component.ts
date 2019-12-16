import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  public techs = ["JavaScript (ES6+)", "HTML & (S)CSS", "React", "Vue", "Node.js", "Express", "GraphQL", "NativeScript"];
  ngOnInit() {
  }

}

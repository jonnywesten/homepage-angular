import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit {

  constructor(private cdr: ChangeDetectorRef) {}

  @ViewChild('myCarousel', {static:false}) myCarousel: NguCarousel<any>;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 2, md: 3, lg: 3, all: 0},
    load: 6,
    interval: {timing: 9999999999, initialDelay: 9999999999},
    loop: true,
    touch: true,
    velocity: 0.2,
    point: {
      visible: true,
      hideOnSingleSlide: true
    }
  }
  carouselItems = [
    {
      name: "Neurolympics.nl",
      text:"Gamification - Brain-based assesment games",
       img:'nl-2.jpg'
    },
    {
      name: "Neurolympics Dashboard",
      text:"Data Management - React application, Material UI",
       img:'nld.jpg'
    },
    {
      name: "Custom webdesign",
      text:"aestheticology.net - Drupal website",
       img:'aest.jpg'
    },
   {
      name: "LiBo",
      text:"Chatbot application - Natuarl language conversations",
       img:'libo-2.jpg'
    }   
  ];

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

}

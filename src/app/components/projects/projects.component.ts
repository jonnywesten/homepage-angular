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
    grid: { xs: 1, sm: 2, md: 2, lg: 2, all: 0},
    load: 6,
    interval: {timing: 9999999999, initialDelay: 9999999999},
    loop: true,
    touch: true,
    velocity: 0.2,
    point: {
      visible: false,
      hideOnSingleSlide: true
    }
  }
  carouselItems = [
    {
      name: "Neurolympics.nl",
      index: 1
    },
    {
      name: "Neurolympics.nl",
      index: 2
    },
    {
      name: "Neurolympics.nl",
      index: 3
    },
    {
      name: "Neurolympics.nl",
      index: 4
    },
    {
      name: "Neurolympics.nl",
      index: 5
    },
    {
      name: "Neurolympics.nl",
      index: 6
    },
  ];

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

}

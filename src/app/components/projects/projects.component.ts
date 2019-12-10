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
    interval: {timing: 4000000000000, initialDelay: 10000000000000},
    loop: true,
    touch: true,
    velocity: 0.2,
    point: {
      visible: false,
      hideOnSingleSlide: true
    }
  }
  carouselItems = [1, 2, 3, 4, 5, 6];

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

}

import {Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef, HostListener, ElementRef} from '@angular/core';
import {NguCarousel, NguCarouselConfig} from '@ngu/carousel';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit {

  constructor(private http: HttpClient,
              private elRef: ElementRef,
              private cdr: ChangeDetectorRef) {
  }

  @ViewChild('myCarousel', {static: false}) myCarousel: NguCarousel<any>;
  carouselConfig: NguCarouselConfig = {
    grid: {xs: 2, sm: 2, md: 3, lg: 3, all: 0},
    load: 6,
    interval: {timing: 9999999, initialDelay: 9999999},
    loop: true,
    touch: true,
    slide: 1,
    velocity: 0,
    point: {
      visible: true,
      hideOnSingleSlide: true
    }
  };
  items = [];

  activeItemIndex = 0;
  activeItem;

  ngOnInit() {
    this.http.get('https://code-smart.com/content-data/projects.json')
      .toPromise()
      .then((res: any) => {
        this.items = res.projects;
        this.activeItem = this.items[this.activeItemIndex];
      });

  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  selectItem(i: number, directionRight?: boolean) {

    this.activeItemIndex = i;

    document.getElementById('active-item').style.opacity = '0';
    setTimeout(() => {
      this.activeItem = this.items[this.activeItemIndex];
      document.getElementById('active-item').style.opacity = '1';
    }, 200);
  }

  selectNext() {

    this.activeItemIndex++;
    if (this.activeItemIndex >= this.items.length) {
      this.activeItemIndex = 0;
    }
    this.selectItem(this.activeItemIndex);
  }

  selectPrevious() {
    this.activeItemIndex--;
    if (this.activeItemIndex < 0) {
      this.activeItemIndex = this.items.length - 1;
    }
    this.selectItem(this.activeItemIndex);
  }

  isActive(i: number): string {
    return this.items.indexOf(this.activeItem) === i ? 'isActive' : '';
  }
}

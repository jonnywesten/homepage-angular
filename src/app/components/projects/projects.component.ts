import {Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef, HostListener, ElementRef} from '@angular/core';
import {NguCarousel, NguCarouselConfig} from '@ngu/carousel';
import {HttpClient} from '@angular/common/http';
import {LanguageService} from '../../services/language.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit {

  constructor(private ls: LanguageService,
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

  public text;

  activeItemIndex = 0;
  activeItem;

  ngOnInit() {
    this.ls.sub.subscribe((res: any) => {
      this.text = res.projects;
      this.activeItem = this.text.items[this.activeItemIndex];
    });
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  selectItem(i: number) {

    this.activeItemIndex = i;

    document.getElementById('active-item').style.opacity = '0';
    setTimeout(() => {
      this.activeItem = this.text.items[this.activeItemIndex];
      document.getElementById('active-item').style.opacity = '1';
    }, 200);
  }

  selectNext() {

    this.activeItemIndex++;
    if (this.activeItemIndex >= this.text.items.length) {
      this.activeItemIndex = 0;
    }
    this.selectItem(this.activeItemIndex);
  }

  selectPrevious() {
    this.activeItemIndex--;
    if (this.activeItemIndex < 0) {
      this.activeItemIndex = this.text.items.length - 1;
    }
    this.selectItem(this.activeItemIndex);
  }

  isActive(i: number): string {
    return this.text.items.indexOf(this.activeItem) === i ? 'isActive' : '';
  }
}

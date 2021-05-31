import {Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef, ElementRef, Renderer2} from '@angular/core';
import {NguCarousel, NguCarouselConfig} from '@ngu/carousel';
import {LanguageService} from '../../services/language.service';
import {ImageService} from '../../services/image.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit {

  constructor(private ls: LanguageService,
              private renderer: Renderer2,
              public imageService: ImageService,
              private cdr: ChangeDetectorRef) {
  }

  @ViewChild('carousel') carouselRef: NguCarousel<any>;
  @ViewChild('activeitem') activeItemRef: ElementRef<HTMLInputElement>;

  carouselConfig: NguCarouselConfig = {
    grid: {xs: 2, sm: 2, md: 3, lg: 3, all: 0},
    load: 6,
    interval: {timing: 1e9, initialDelay: 1e9},
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
    this.renderer.addClass(this.activeItemRef.nativeElement, 'fadeOutIn');
    setTimeout(() => {
      this.activeItem = this.text.items[this.activeItemIndex];
    }, 250);
    setTimeout(() => {
      this.renderer.removeClass(this.activeItemRef.nativeElement, 'fadeOutIn');
      }, 500);
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

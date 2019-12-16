import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef, HostListener } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit {

  constructor(private cdr: ChangeDetectorRef) {
  }

  @ViewChild('myCarousel', { static: false }) myCarousel: NguCarousel<any>;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 2, sm: 3, md: 3, lg: 3, all: 0 },
    load: 6,
    interval: { timing: 9999999, initialDelay: 9999999 },
    loop: true,
    touch: true,
    slide: 1,
    velocity: 0,
    point: {
      visible: true,
      hideOnSingleSlide: true
    }
  };
  items = [
    {
      name: 'Neurolympics.nl',
      text: 'Gamification - Brain-based assessment games',
      thumb: 'nl-2.jpg',
      img: 'nl-1.png'
    },
    {
      name: 'MetallRente',
      text: 'IT Consulting - Angular, Bootstrap, Java Spring',
      thumb: 'mr.png',
      img: 'mr-1.png'
    },
    {
      name: 'FließenConcept Eskuche',
      text: 'Simple One Pager - HTML5, Bootstrap, CSS3',
      thumb: 'fce.png',
      img: 'fce-2.png'
    },
    {
      name: 'Neurolympics Dashboard',
      text: 'Data Management - React application, Material UI',
      thumb: 'nld.jpg',
      img: 'nld-1.png'
    },
    {
      name: 'LiBo Chatbot',
      text: 'Chat application - Angular, PHP, Goolge Dialogflow',
      thumb: 'libo-2.jpg',
      img: 'libo-1.png'
    },
    {
      name: 'aestheticology.net',
      text: 'Custom webdesign - Drupal website, HTML5, jQuery',
      thumb: 'aest.jpg',
      img: 'aest.jpg'
    }
  ];

  activeItem = this.items[0];

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  selectItem(i: number) {
    document.getElementById('active-item').style.opacity = '0';
    setTimeout(() => {
      this.activeItem = this.items[i];
      document.getElementById('active-item').style.opacity = '1';
    }, 200);


  }

  isActive(i: number): string {
    return this.items.indexOf(this.activeItem) === i ? 'isActive' : '';
  }



}

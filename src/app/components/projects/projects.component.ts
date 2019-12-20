import {Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef, HostListener, ElementRef} from '@angular/core';
import {NguCarousel, NguCarouselConfig} from '@ngu/carousel';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit {

  constructor(private elRef: ElementRef,
              private cdr: ChangeDetectorRef) {
  }

  @ViewChild('myCarousel', {static: false}) myCarousel: NguCarousel<any>;
  carouselConfig: NguCarouselConfig = {
    grid: {xs: 2, sm: 3, md: 3, lg: 3, all: 0},
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
  items = [
    {
      name: 'Neurolympics.nl',
      text: 'Gamification - Brain-based assessment games',
      thumb: 'nl-thumb.png',
      img: 'nl-2.jpg',
      url: 'https://neurolympics.nl/demo',
      badges: ['JavaScript', 'jQuery', 'webGL', 'PixiJS', 'Bootstrap', 'REST Api'],
      description: 'Gamification - The NeurOlympics games measure cognitive abilities in a fun and playful way. ' +
        'Released by <a href="https://brainsfirst.com/" target="_blank">BrainsFirst </a>' +
        'the games are used for streamlining recruiting processes by companies such ' +
        'as McKinsey, Deloitte and LVNL. <br/>The games and UI are mostly written jQuery and use pixiJS for delivering smooth webGL ' +
        'performance. I\'ve been working as lead-frontend developer on this project for several years together with the ' +
        'great guys from <a href="http://www.essentialsln.com/" target="_blank">Essential Solutions</a> who took care of the backend development.'
    },
    {
      name: 'IT Consulting',
      text: '',
      thumb: 'mr-thumb.png',
      img: 'mr-3.jpg',
      url: 'https://metallrente.com/aksr',
      badges: ['JavaScript', 'TypeScript', 'Angular', 'Highcharts', 'Java', 'Spring', 'Maven'],
      description: 'Full Stack Development - Angular, Java, Spring. During the last years I have been working in an IT-Consultancy and developing highly-specialized software for the ' +
        'insurance industry. <br/>Working on the front-, as well as on the backend I have been responsible for all steps in the user-interaction ' +
        'form data input and validation to calculation using 3rd party software as well as PDF generation. <br/>It was great learning experience ' +
        'working with complex datasets, server infrastructure and agile software development (Scrum).'
    },
    {
      name: 'FließenConcept Eskuche',
      text: 'Simple One Pager - HTML5, Bootstrap, CSS3',
      thumb: 'fce-thumb.png',
      img: 'fce.png',
      url: 'https://www.fliesenconcept-eskuche.biz/',
      badges: ['Webdesign', 'Bootstrap', 'jQuery', 'Google Maps Api', 'HTML', 'CSS'],
      description: 'Pure HTML website for a local tiler company. My client wanted a plain online representation of his business without ' +
        'too much user interaction or dynamic content, so we decided to go for a simple one pager.<br/> The site was created within a few days by utilizing ' +
        'a HTML template based on Twitter Bootstrap and doing some customization.<br/> After we inserted the texts and images describing ' +
        'his business my client was very happy with his new homepage.'
    },
    {
      name: 'Neurolympics Dashboard',
      text: 'Data Management - React application, Material UI',
      thumb: 'nld-thumb.png',
      img: 'nld.png',
      url: 'https://neurolympics.nl/dashboard',
      badges: ['React', 'webpack', 'Material UI', 'ChartJS', 'SheetJS', 'REST Api'],
      description: 'Data management frontend for the NeurOlympics games. Clients can view the assessment data and contact '
       + 'potential candidates through this single page application.'
    },
    {
      name: 'LiBo Chatbot',
      text: 'Chat application - Angular, PHP, Goolge Dialogflow',
      thumb: 'libo-thumb.png',
      img: 'libo.png'
    },
    {
      name: 'aestheticology.net',
      text: 'Custom webdesign - Drupal website, HTML5, jQuery',
      thumb: 'aes-thumb.png',
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

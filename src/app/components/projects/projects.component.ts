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
  items = [
    {
      name: 'Neurolympics.nl',
      thumb: 'nl-thumb.jpg',
      img: 'nl.jpg',
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
      name: 'Code Smart News',
      thumb: 'csn-thumb.jpg',
      img: 'csn.jpg',
      url: 'https://news.code-smart.com',
      badges: ['TypeScript', 'React', 'Bootstrap', 'GitHub', 'Bootstrap', 'REST API'],
      description: 'News Feed App written in React and TypeScript. The Code Smart News display the latest news by connecting to the ' +
        '<a href="https://https://open-platform.theguardian.com/" target="_blank">' +
        'Guardian Open Platform API</a> which is really awesome, since it is free and offers (small) images, full text and article access by id. <br/>Basically it is just ' +
        'an example project to feature some code on GitHub, but it was also really fun to create. It is possible to browse articles vie endless scroll, search for articles ' +
        'and also directly access articles or sections via deep linking. The full code is also on ' +
        '<a href="https://github.com/DanielElport/react-news" target="_blank">my GitHub page</a>'
    },
    {
      name: 'LiBO Chatbot',
      thumb: 'libo-thumb.jpg',
      img: 'libo.jpg',
      url: 'https://kvg.de',
      badges: ['Angular', 'PHP', 'Google Dialogflow', 'NLP', '3rd party API', 'WebSocket', 'Facebook intergration'],
      description: 'Live Traffic information - LiBO offers life information on public transport routes, arrivals and departure times. Google Dialogflow ' +
        'is used for natural language processing (NLP). <br/>A WebSocket based backend written in PHP offers live monitoring of chats and the option ' +
        'for manual answers. LiBO ist intergrated within a Typo3 website via HTML snippet as an angular frontend as well as within a chatbot ' +
        'in a facebook business page.'
    },
    {
      name: 'Neurolympics Dashboard',
      thumb: 'nld-thumb.jpg',
      img: 'nld.jpg',
      url: 'https://neurolympics.nl/dashboard',
      badges: ['React', 'webpack', 'Material UI', 'ChartJS', 'SheetJS', 'REST API'],
      description: 'Data management frontend for the NeurOlympics games. Clients can view the assessment data and contact '
        + 'potential candidates through this single page application.<br/> Written in React and using Material UI the app provides a smooth look and feel. ' +
        'ChartJS has been used for data visualization, while SheetJS handles Excel and CSV spreadsheets. Communication with the backend is implemented via REST.'
    },
    {
      name: 'FliesenConcept Eskuche',
      thumb: 'fce-thumb.jpg',
      img: 'fce.jpg',
      url: 'https://www.fliesenconcept-eskuche.biz/',
      badges: ['Webdesign', 'Bootstrap', 'jQuery', 'Google Maps API', 'HTML', 'CSS'],
      description: 'Pure HTML website for a local tiler company. My client wanted a plain online representation of his business without ' +
        'too much user interaction or dynamic content, so we decided to go for a simple one pager.<br/> The site was created within a few days by utilizing ' +
        'a HTML template based on Twitter Bootstrap and doing some customization.<br/> After we inserted the texts and images describing ' +
        'his business my client was very happy with his new homepage.'
    },
    {
      name: 'IT Consulting',
      thumb: 'mr-thumb.jpg',
      img: 'mr.jpg',
      url: 'https://metallrente.com/aksr',
      badges: ['JavaScript', 'TypeScript', 'Angular', 'Highcharts', 'Java', 'Spring', 'Maven'],
      description: 'Full Stack Development - Angular, Java, Spring. During the last years I have been working in an IT-Consultancy and developing highly-specialized software for the ' +
        'insurance industry. <br/>Working on the front-, as well as on the backend I have been responsible for all steps in the user-interaction ' +
        'form data input and validation to calculation using 3rd party software as well as PDF generation. <br/>It was great learning experience ' +
        'working with complex datasets, server infrastructure and agile software development (Scrum).'
    },
    {
      name: 'aestheticology.net',
      thumb: 'aes-thumb.jpg',
      img: 'aes.jpg',
      url: 'https://aestheticology.net',
      badges: ['Drupal', 'CMS', 'HTML', 'CSS', 'jQuery'],
      description: 'Drupal website - Aestheticology.net is website for UK-based aesthetic Doctor Kam Lally, who offers non-surgical facial ' +
        'rejuvenation using dermal fillers and anti-wrinkle injections. <br/>I created a custom Drupal website for him based on the desgin of his ' +
        'already existing print marketing material. The website also incorparates the use of some 3rd party APIs such as Google Maps and Mailchimp.<br/>' +
        'I did not get paid for this project, but instead Kam generously injected botox into my face.'
    }
  ];

  activeItemIndex = 0;
  activeItem = this.items[this.activeItemIndex];

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  selectItem(i: number, directionRight?: boolean) {

    document.getElementById('active-item').style.opacity = '0';
    setTimeout(() => {
      this.activeItem = this.items[i];
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
    if (this.activeItemIndex <= 0) {
      this.activeItemIndex = this.items.length - 1;
    }
    this.selectItem(this.activeItemIndex);
  }

  isActive(i: number): string {
    return this.items.indexOf(this.activeItem) === i ? 'isActive' : '';
  }
}

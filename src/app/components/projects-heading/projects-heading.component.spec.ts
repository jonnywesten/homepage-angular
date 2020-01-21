import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsHeadingComponent } from './projects-heading.component';

describe('ProjectsHeadingComponent', () => {
  let component: ProjectsHeadingComponent;
  let fixture: ComponentFixture<ProjectsHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

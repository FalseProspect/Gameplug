import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialsSidebarComponents } from './socials-sidebar.component';

describe('MediaplugSidebarComponent', () => {
  let component: SocialsSidebarComponents;
  let fixture: ComponentFixture<SocialsSidebarComponents>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialsSidebarComponents ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialsSidebarComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

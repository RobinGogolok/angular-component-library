import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaMainPageComponent } from './media-main-page.component';

describe('MediaMainPageComponent', () => {
  let component: MediaMainPageComponent;
  let fixture: ComponentFixture<MediaMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

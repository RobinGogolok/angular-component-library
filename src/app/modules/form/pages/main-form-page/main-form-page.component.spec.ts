import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFormPageComponent } from './main-form-page.component';

describe('MainFormPageComponent', () => {
  let component: MainFormPageComponent;
  let fixture: ComponentFixture<MainFormPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainFormPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

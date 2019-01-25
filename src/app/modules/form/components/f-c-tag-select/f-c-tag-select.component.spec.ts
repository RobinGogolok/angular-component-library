import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FCTagSelectComponent } from './f-c-tag-select.component';

describe('FCTagSelectComponent', () => {
  let component: FCTagSelectComponent;
  let fixture: ComponentFixture<FCTagSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FCTagSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FCTagSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

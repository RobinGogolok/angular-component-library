import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureUploadWithPreviewComponent } from './picture-upload-with-preview.component';

describe('PictureUploadWithPreviewComponent', () => {
  let component: PictureUploadWithPreviewComponent;
  let fixture: ComponentFixture<PictureUploadWithPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureUploadWithPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureUploadWithPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

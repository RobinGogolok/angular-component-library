import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-picture-upload-with-preview',
  templateUrl: './picture-upload-with-preview.component.html',
  styleUrls: ['./picture-upload-with-preview.component.scss']
})
export class PictureUploadWithPreviewComponent {

  @ViewChild('fileInput', {read: ElementRef}) fileInput: ElementRef;
  @Input('defaultImage') defaultImage: string;
  @Input('imageAltText') imageAltText: string;

  public fileUrl: string | ArrayBuffer;

  constructor() {
    this.defaultImage = (this.defaultImage) ? this.defaultImage : 'https://www.placehold.it/200x200';
  }

  public onChange(event: Event): void {
    if(event.target['files'] && event.target['files'][0]) {
      const file = event.target['files'][0];
      const reader = new FileReader();
      reader.onload = ev => {
        this.fileUrl = reader.result;
      };
      reader.readAsDataURL(file);
    } else {
      this.showDefaultImage();
    }
  }

  public clearFileInput(): void {
    this.fileInput.nativeElement.value = null;
    this.showDefaultImage();
  }

  private showDefaultImage(): void {
    this.fileUrl = '';
  }

  public getPreviewImageUrl(): string | ArrayBuffer {
    return (this.fileUrl)? this.fileUrl : this.defaultImage;
  }
}

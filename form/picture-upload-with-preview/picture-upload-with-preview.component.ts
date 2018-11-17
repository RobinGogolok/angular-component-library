import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-picture-upload-with-preview',
  templateUrl: './picture-upload-with-preview.component.html',
  styleUrls: ['./picture-upload-with-preview.component.scss']
})
export class PictureUploadWithPreviewComponent {

  @ViewChild('fileInput', {read: ElementRef}) fileInput: ElementRef;

  public fileUrl: string | ArrayBuffer;
  readonly defaultFileUrl = 'https://www.placehold.it/200x200';
  public fileName: string;

  constructor() { }

  public onChange(event: Event): void {
    if(event.target['files'] && event.target['files'][0]) {
      const file = event.target['files'][0];
      this.fileName = file.name;
      const reader = new FileReader();
      reader.onload = ev => {
        this.fileUrl = reader.result;
      };
      reader.readAsDataURL(file);
    } else {
      this.clearFileName();
      this.showDefaultImage();
    }
  }

  public clearFileInput(): void {
    this.clearFileName();
    this.fileInput.nativeElement.value = null;
    this.showDefaultImage();
  }

  private showDefaultImage(): void {
    this.fileUrl = '';
  }

  private clearFileName(): void {
    this.fileName = '';
  }
}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Image} from "../../../../core/interfaces/image.interface";

@Component({
  selector: 'app-light-box',
  templateUrl: './light-box.component.html',
  styleUrls: ['./light-box.component.scss']
})
export class LightBoxComponent implements OnInit {

  @Input() images: Image[];
  @Input() selectedImageIndex: number;
  @Output() functions = new EventEmitter<{
    open: () => {},
    close: () => {},
  }>();

  public isLightBoxOpen: boolean;

  constructor() { }

  ngOnInit() {
    this.functions.emit({
      open: this.openLightBox.bind(this),
      close: this.closeLightBox.bind(this),
    });
    this.isLightBoxOpen = false;
  }

  public openLightBox(): void {
    this.isLightBoxOpen = true;
  }

  public closeLightBox(): void {
    this.isLightBoxOpen = false;
  }

  public previousImage(): void {
    if (this.selectedImageIndex === 0) {
      return;
    }
    this.selectedImageIndex--;
  }

  public nextImage(): void {
    if (this.selectedImageIndex === this.images.length - 1) {
      return;
    }
    this.selectedImageIndex++;
  }
}

import { Component } from '@angular/core';
import { FullGalleryService } from '../full-gallery.service';
import { NgIf } from '@angular/common';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-full-size-gallery',
  standalone: true,
  imports: [NgIf],
  templateUrl: './full-size-gallery.component.html',
  styleUrl: './full-size-gallery.component.css'
})

export class FullSizeGalleryComponent {

  overlay: boolean = false;
  slider: boolean = false;
  bigImagePath: string = `assets/images/image-product-1.jpg`;
  activeThumbnailNumber: number = 1;

  constructor(private fullGalleryService: FullGalleryService) {
  }

  ngOnInit() {
    this.fullGalleryService.currentSlider.subscribe(slider => this.slider = slider)
    this.fullGalleryService.currentOverlay.subscribe(overlay => this.overlay = overlay)
  }

  closeSlider() {
    this.fullGalleryService.closeSlider();
  }

  showNextImage() {
    if (this.activeThumbnailNumber < 4) {
      this.activeThumbnailNumber++;
      this.changeBigImage();
    }

  }

  showPreviousImage() {
    if (this.activeThumbnailNumber > 1) {
      this.activeThumbnailNumber--;
      this.changeBigImage();
    }
  }

  activeThumbnailToggle(thumbnailNumber: number) {
    this.activeThumbnailNumber = thumbnailNumber;
    this.changeBigImage();
  }

  changeBigImage() {
    this.bigImagePath = `assets/images/image-product-${this.activeThumbnailNumber}.jpg`;
  }

}

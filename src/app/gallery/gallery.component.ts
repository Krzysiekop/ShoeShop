import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FullGalleryService } from '../full-gallery.service'; 

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgIf],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})

export class GalleryComponent {
  activeThumbnailNumber: number = 1;
  bigImagePath: string = `assets/images/image-product-1.jpg`;

  constructor(private fullGalleryService :FullGalleryService){}

  showSlider(thumbnailNumber:number){
    this.fullGalleryService.openSlider();
  }

  activeThumbnailToggle(thumbnailNumber: number) {
    this.activeThumbnailNumber = thumbnailNumber;
    this.bigImagePath = `assets/images/image-product-${this.activeThumbnailNumber}.jpg`;
  }

}

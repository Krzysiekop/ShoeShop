import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FullGalleryService {

  private sliderSource = new BehaviorSubject<boolean>(false);
  currentSlider = this.sliderSource.asObservable();

  private overlaySource = new BehaviorSubject<boolean>(false);
  currentOverlay = this.overlaySource.asObservable();

  constructor() { }

  openSlider() {
    this.sliderSource.next(true);
    this.overlaySource.next(true);
  }

  closeSlider() { 
    this.sliderSource.next(false);
    this.overlaySource.next(false);
  }
}

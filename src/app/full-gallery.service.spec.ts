import { TestBed } from '@angular/core/testing';

import { FullGalleryService } from './full-gallery.service';

describe('FullGalleryService', () => {
  let service: FullGalleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FullGalleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullSizeGalleryComponent } from './full-size-gallery.component';

describe('FullSizeGalleryComponent', () => {
  let component: FullSizeGalleryComponent;
  let fixture: ComponentFixture<FullSizeGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullSizeGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullSizeGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component'; 
import { DescriptionComponent } from './description/description.component'; 
import { GalleryComponent } from './gallery/gallery.component'; 
import { FullSizeGalleryComponent } from './full-size-gallery/full-size-gallery.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, DescriptionComponent, GalleryComponent, FullSizeGalleryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'shoeShop';
}

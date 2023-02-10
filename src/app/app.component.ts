import { Component } from '@angular/core';
import { FavoriteStoreService } from './services/favorite-store/favorite-store.service';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'photo-gallery-app';
  links = [
    { name: 'Photos', path: '/' },
    { name: 'Favorites', path: 'favorites' },
  ];
  activeLink = this.links[0].name;
  backgroundColor: ThemePalette = 'primary';
  constructor(private favoriteStore: FavoriteStoreService) {}

  ngOnInit() {
    this.favoriteStore.init();
  }
}

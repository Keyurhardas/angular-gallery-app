import { TestBed } from '@angular/core/testing';

import { FavoriteStoreService } from './favorite-store.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FavoriteStoreService', () => {
  let service: FavoriteStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [MatSnackBarModule, BrowserAnimationsModule],
    });
    service = TestBed.inject(FavoriteStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('it should add a favorite picture', () => {
    const obj = {
      author: 'Alejandro Escamilla',
      download_url: 'https://picsum.photos/id/0/5000/3333',
      height: 3333,
      id: '0',
      url: 'https://unsplash.com/photos/yC-Yzbqy7PY',
      width: 5000,
    };
    service.addFavoritePicture(obj);
    expect(service.state.length).toBeGreaterThanOrEqual(1);
  });

  it('it should remove a favorite picture', () => {
    service.removeFavoritePicture('0');
    expect(service.state.length).toBeLessThanOrEqual(0);
  });
});

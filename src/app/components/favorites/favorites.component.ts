import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Picture } from 'src/app/models/Picture';
import { FavoriteStoreService } from 'src/app/services/favorite-store/favorite-store.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent {
  FavoritePictures: any;
  isEmpty: boolean = false;
  subscription$ = new Subscription();

  constructor(
    private router: Router,
    private favoriteStore: FavoriteStoreService
  ) {}

  ngOnInit() {
    this.subscription$ = this.favoriteStore
      .getAllFavoritePictures()
      .subscribe((res) => {
        this.FavoritePictures = res;
      });
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
  viewFullPicture(picture: Picture) {
    console.log(picture);
    this.router.navigateByUrl(`photos/${picture.id}`);
  }
}

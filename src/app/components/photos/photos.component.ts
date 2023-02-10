import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Picture } from 'src/app/models/Picture';
import { FavoriteStoreService } from 'src/app/services/favorite-store/favorite-store.service';
import { PictureApiService } from 'src/app/services/picture-api/picture-api.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent {
  Pictures: Picture[] = [];
  offset: number = 20;
  page: number = 1;
  subscription$ = new Subscription();
  isLoading: boolean = true;
  constructor(
    private pictureAPI: PictureApiService,
    private favoriteStore: FavoriteStoreService
  ) {}

  ngOnInit() {
    this.subscription$ = this.pictureAPI
      .getAllPictures(this.page, this.offset)
      .subscribe((res) => {
        this.Pictures = res;
        console.log(res);
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      });
  }

  onScroll() {
    this.offset = this.offset + 20;
    this.pictureAPI
      .getAllPictures(this.page, this.offset)
      .subscribe((res: Picture[]) => {
        // this.Pictures.push(...res);
        this.Pictures = res;
        if (this.Pictures.length == 100) {
          this.page++;
          this.offset = 20;
        }
        console.log(res);
      });
  }

  ngOnDestroy() {
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }
  }

  addPictureTofavorite(picture: Picture) {
    console.log(picture);
    this.favoriteStore.addFavoritePicture(picture);
  }
}

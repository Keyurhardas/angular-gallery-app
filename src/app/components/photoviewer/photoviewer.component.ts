import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FavoriteStoreService } from 'src/app/services/favorite-store/favorite-store.service';

@Component({
  selector: 'app-photoviewer',
  templateUrl: './photoviewer.component.html',
  styleUrls: ['./photoviewer.component.scss'],
})
export class PhotoviewerComponent {
  photoId: any;
  iconName: string = 'favorite';
  Buttondisabled: boolean = false;
  picture: string = '';
  isLoading: boolean = true;
  constructor(
    private favoriteStore: FavoriteStoreService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.photoId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('received id', this.photoId);
    const picture = this.favoriteStore.getFavoritePicture(this.photoId);
    if (picture) this.picture = picture.download_url;
  }
  ngOnDestroy() {
    this.picture = '';
  }

  removeFavorite() {
    this.iconName = 'favorite_border';
    this.Buttondisabled = true;
    this.favoriteStore.removeFavoritePicture(this.photoId);
  }

  goBack() {
    this.location.back();
  }

  imgLoaded() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}

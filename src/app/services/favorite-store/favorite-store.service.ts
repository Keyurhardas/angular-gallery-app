import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Picture } from 'src/app/models/Picture';
import { CommonServiceService } from '../common/common-service.service';

@Injectable({
  providedIn: 'root',
})
export class FavoriteStoreService {
  private pictures$ = new BehaviorSubject<Picture[]>([]);

  constructor(private common: CommonServiceService) {}

  public getAllFavoritePictures(): Observable<Picture[]> {
    return this.pictures$;
  }

  public get state() {
    return this.pictures$.value;
  }

  public init() {
    const fav = localStorage.getItem('Fav');
    if (fav) {
      this.pictures$.next(JSON.parse(fav));
    }
  }

  public addFavoritePicture(picture: Picture) {
    if (this.isDuplicate(picture.id)) {
      this.common.showSnackBar('Already in favorites');
    } else {
      this.pictures$.next([...this.pictures$.value, picture]);
      this.updateLocalStorage();
      this.common.showSnackBar('Added to favorites!');
    }
    console.log(this.pictures$.value);
  }

  public getFavoritePicture(id: string) {
    const items = this.pictures$.value;
    let index: any = null;
    for (let i = 0; i < items.length; i++) {
      if (id === items[i].id) {
        index = i;
      }
    }
    return items[index];
  }

  public isDuplicate(id: string): boolean {
    const items = this.pictures$.value;
    let index: any = null;
    for (let i = 0; i < items.length; i++) {
      if (id === items[i].id) {
        index = true;
      }
    }
    return index;
  }

  public removeFavoritePicture(id: string) {
    const items = this.pictures$.value;
    let index: any = null;
    for (let i = 0; i < items.length; i++) {
      if (id === items[i].id) {
        index = i;
      }
    }
    items.splice(parseInt(index), 1);
    this.pictures$.next(items);
    console.log(this.pictures$.value);
    this.updateLocalStorage();
  }

  private updateLocalStorage() {
    const favs = this.pictures$.value;
    const data = JSON.stringify(favs);
    localStorage.setItem('Fav', data);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Picture } from 'src/app/models/Picture';

@Component({
  selector: 'app-photos-grid-view',
  templateUrl: './photos-grid-view.component.html',
  styleUrls: ['./photos-grid-view.component.scss'],
})
export class PhotosGridViewComponent {
  @Input() pictures: any;
  color: string = '#FFFFFFB3';
  isLoading: boolean = true;
  @Output() pictureEvent = new EventEmitter<Picture>();

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
  addPicture(picture: Picture) {
    this.pictureEvent.emit(picture);
  }

  identify(index: number, item: any) {
    return item.id;
  }
}

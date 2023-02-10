import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosGridViewComponent } from './photos-grid-view.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRippleModule } from '@angular/material/core';

describe('PhotosGridViewComponent', () => {
  let component: PhotosGridViewComponent;
  let fixture: ComponentFixture<PhotosGridViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotosGridViewComponent],
      imports: [MatSnackBarModule, MatGridListModule, MatRippleModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotosGridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly render the passed @Input picture data', () => {
    component.pictures = [
      {
        id: '0',
        author: 'Alejandro Escamilla',
        width: 5000,
        height: 3333,
        url: 'https://unsplash.com/photos/yC-Yzbqy7PY',
        download_url: 'https://picsum.photos/id/0/5000/3333',
      },
    ];
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('img').src).toBe(
      'https://picsum.photos/id/0/5000/3333'
    );
  });

  it('should correctly @Output value of selected picture in component', () => {
    component.pictures = [
      {
        id: '0',
        author: 'Alejandro Escamilla',
        width: 5000,
        height: 3333,
        url: 'https://unsplash.com/photos/yC-Yzbqy7PY',
        download_url: 'https://picsum.photos/id/0/5000/3333',
      },
    ];
    fixture.detectChanges();
    spyOn(component.pictureEvent, 'emit'); // 1
    const div = fixture.nativeElement.querySelector('#imgDiv');
    fixture.nativeElement.querySelector('#picture').src =
      'https://picsum.photos/id/1/5000/3333'; // 2
    const img = fixture.nativeElement.querySelector('#picture').src;

    div.click(); // 3
    fixture.detectChanges();
    expect(component.pictureEvent.emit).toHaveBeenCalledWith({
      id: '0',
      author: 'Alejandro Escamilla',
      width: 5000,
      height: 3333,
      url: 'https://unsplash.com/photos/yC-Yzbqy7PY',
      download_url: 'https://picsum.photos/id/0/5000/3333',
    }); // 4
  });
});

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { PhotosComponent } from './photos.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PictureApiService } from 'src/app/services/picture-api/picture-api.service';

describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotosComponent],
      imports: [
        HttpClientTestingModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});

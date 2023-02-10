import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesComponent } from './favorites.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PhotosGridViewComponent } from '../photos-grid-view/photos-grid-view.component';
import { MatGridListModule } from '@angular/material/grid-list';

describe('FavoritesComponent', () => {
  let component: FavoritesComponent;
  let fixture: ComponentFixture<FavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoritesComponent, PhotosGridViewComponent],
      imports: [MatSnackBarModule, MatGridListModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

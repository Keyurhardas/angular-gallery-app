import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { PhotoviewerComponent } from './photoviewer.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule } from '@angular/material/icon';

describe('PhotoviewerComponent', () => {
  let component: PhotoviewerComponent;
  let fixture: ComponentFixture<PhotoviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoviewerComponent],
      imports: [MatSnackBarModule, RouterTestingModule, MatIconModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

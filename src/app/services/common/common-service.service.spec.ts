import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { CommonServiceService } from './common-service.service';

describe('CommonServiceService', () => {
  let service: CommonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[],
      imports:[MatSnackBarModule]
    });
    service = TestBed.inject(CommonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

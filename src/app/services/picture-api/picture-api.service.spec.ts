import { TestBed } from '@angular/core/testing';

import { PictureApiService } from './picture-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PictureApiService', () => {
  let service: PictureApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PictureApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

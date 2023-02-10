import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Picture } from 'src/app/models/Picture';

@Injectable({
  providedIn: 'root',
})
export class PictureApiService {
  constructor(private http: HttpClient) {}

  getAllPictures(page: number, offset: number): Observable<Picture[]> {
    return this.http.get<Picture[]>(
      `https://picsum.photos/v2/list?page=${page}&limit=${offset}`
    );
  }
}

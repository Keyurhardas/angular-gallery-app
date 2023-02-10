import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule  } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { PhotosComponent } from './components/photos/photos.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PhotosGridViewComponent } from './components/photos-grid-view/photos-grid-view.component';
import { MatRippleModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { PhotoviewerComponent } from './components/photoviewer/photoviewer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    FavoritesComponent,
    PhotosGridViewComponent,
    PhotoviewerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatTabsModule,
    InfiniteScrollModule,
    MatGridListModule,
    MatRippleModule,
    HttpClientModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

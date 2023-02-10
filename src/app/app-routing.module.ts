import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { PhotosComponent } from './components/photos/photos.component';
import { PhotoviewerComponent } from './components/photoviewer/photoviewer.component';

// const routes: Routes = [];

const routes: Routes = [
  { path: '', component: PhotosComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'photos/:id', component: PhotoviewerComponent },
  // {
  //   path: '/photos/:id',
  //   loadChildren: () => {
  //     import('./components/photoviewer/photoviewer.component').then(
  //       (m) => m.PhotoviewerComponent
  //     );
  //   },
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

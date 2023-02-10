import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CommonServiceService {
  constructor(private snackbar: MatSnackBar) {}

  showSnackBar(message: string, action?: string) {
    this.snackbar.open(message, action ? action : '', {
      duration: 1000,
    });
  }
}

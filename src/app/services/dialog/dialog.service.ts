import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmationDialogComponent } from 'src/app/modules/pc-common/confirmation-dialog/confirmation-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openDialog(title: string, message: string): Observable<boolean> {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: { title, message}
    });
    return dialogRef.afterClosed();
  }
}

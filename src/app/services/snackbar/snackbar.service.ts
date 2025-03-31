import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { MessageDTO } from 'src/app/models/message-dto';
import { SnackbarComponent } from 'src/app/modules/pc-common/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  messageDTO!: MessageDTO;

  constructor(private snackBar: MatSnackBar) { }

  showSnackBarForSuccess(message: string): void {
    this.messageDTO = {
      message: message,
      type: 'Success'
    };
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: this.messageDTO,
      panelClass: ['success-snackbar'],
      duration: environment.messageTimeout,
      verticalPosition: 'top'
    });
  }

  showSnackBarForError(message: string): void {
    this.messageDTO = {
      message: message,
      type: 'Error'
    };
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: this.messageDTO,
      panelClass: ['error-snackbar'],
      duration: environment.messageTimeout,
      verticalPosition: 'top'
    });
  }

  showSnackBarForInfo(message: string): void {
    this.messageDTO = {
      message: message,
      type: 'Info'
    };
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: this.messageDTO,
      panelClass: ['info-snackbar'],
      duration: environment.messageTimeout,
      verticalPosition: 'top'
    });
  }
}

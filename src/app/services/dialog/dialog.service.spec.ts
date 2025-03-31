import { TestBed } from '@angular/core/testing';

import { DialogService } from './dialog.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/modules/pc-common/confirmation-dialog/confirmation-dialog.component';
import { of } from 'rxjs';

describe('DialogService', () => {
  let service: DialogService;
  let dialog: MatDialog;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule]
    });
    service = TestBed.inject(DialogService);
    dialog = TestBed.inject(MatDialog);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should open dialog with correct data', () => {
    const dialogSpy = spyOn(dialog, 'open').and.returnValue({
      afterClosed: () => of(true)
    } as any);
    service.openDialog('Test Title', 'Test Message');
    expect(dialogSpy).toHaveBeenCalled();
    expect(dialogSpy).toHaveBeenCalledWith(ConfirmationDialogComponent, {
      data: { title: 'Test Title', message: 'Test Message'}
    });
  });
});

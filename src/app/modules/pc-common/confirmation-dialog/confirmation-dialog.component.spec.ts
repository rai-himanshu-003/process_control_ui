import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

describe('ConfirmationDailogComponent', () => {
  let component: ConfirmationDialogComponent;
  let fixture: ComponentFixture<ConfirmationDialogComponent>;
  let dialogRefSpyObj = jasmine.createSpyObj({ close: null });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationDialogComponent ],
      imports: [MatDialogModule],
      providers: [
        { provide: MatDialogRef,  useValue: dialogRefSpyObj },
        { provide: MAT_DIALOG_DATA, useValue: {} }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close dialog with true on confirm', () => {
    component.onConfirm();
    expect(dialogRefSpyObj.close).toHaveBeenCalledWith(true);
  });

  it('should close dialog with false on cancel', () => {
    component.cancel();
    expect(dialogRefSpyObj.close).toHaveBeenCalledWith(false);
  });
});

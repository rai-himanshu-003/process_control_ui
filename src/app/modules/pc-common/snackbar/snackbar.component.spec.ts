import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { SnackbarComponent } from './snackbar.component';
import { MessageDTO } from 'src/app/models/message-dto';
import { PcCommonModule } from '../pc-common.module';

describe('SnackbarComponent', () => {
  let component: SnackbarComponent;
  let fixture: ComponentFixture<SnackbarComponent>;
  let mockSnackBarRef: jasmine.SpyObj<MatSnackBarRef<SnackbarComponent>>;
  let mockData: MessageDTO;

  beforeEach(async () => {
    mockSnackBarRef = jasmine.createSpyObj('MatSnackBarRef', ['dismiss']);
    mockData = { message: 'Test message', type: 'info' }; // Adjust the properties based on your MessageDTO definition

    await TestBed.configureTestingModule({
      declarations: [SnackbarComponent],
      imports: [PcCommonModule],
      providers: [
        { provide: MatSnackBarRef, useValue: mockSnackBarRef },
        { provide: MAT_SNACK_BAR_DATA, useValue: mockData }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct data', () => {
    expect(component.data).toEqual(mockData);
  });

  it('should call dismiss on snackBarRef when close is called', () => {
    component.snackBarRef.dismiss();
    expect(mockSnackBarRef.dismiss).toHaveBeenCalled();
  });
});
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { PcCommonModule } from '../pc-common/pc-common.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/models/user';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    const user: User = {
      firstName: 'Test',
      lastName: 'User',
      userID: '',
      name: '',
      exp: 0,
      auth_time: 0,
      admin: false
    };
    const authServiceMock = jasmine.createSpyObj('AuthService', ['getUserDetails']);
    authServiceMock.getUserDetails.and.returnValue(user);
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [PcCommonModule, RouterTestingModule, HttpClientTestingModule, BrowserAnimationsModule],
      providers: [ { provide: AuthService, useValue: authServiceMock } ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/models/user';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const authServiceMock = jasmine.createSpyObj('AuthService', ['getUserDetails', 'logOut']);

  beforeEach(async () => {
    const user: User = {
      firstName: 'Test',
      lastName: 'User',
      userID: '',
      name: 'Test User',
      exp: 0,
      auth_time: 0,
      admin: false
    };

    authServiceMock.getUserDetails.and.returnValue(user);
    
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [ MatMenuModule, MatIconModule],
      providers: [ { provide: AuthService, useValue: authServiceMock } ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get user details on init', () => {
    component.ngOnInit();
    expect(authServiceMock.getUserDetails).toHaveBeenCalled();
    expect(component.user.name).toEqual('Test User');
  });

  it('should call logout method on AuthService when logout is called', () => {
    spyOn(component, 'logOut').and.callThrough();
    authServiceMock.logout = jasmine.createSpy('logOut');
    component.logOut();
    expect(authServiceMock.logOut).toHaveBeenCalled();
  });

  it('should return empty string from getInitials if user is null', () => {
    const user: User = {name: '', firstName: '', lastName: '', userID: '', exp: 0, auth_time: 0, admin: false};
    const initials = component.getInitials(user); 
    expect(initials).toBe('');
  });
});

import { Component, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/constants/app-constant';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DarkModeService } from 'src/app/services/darkmode/dark-mode.service';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user!: User;
  initial = '';
  isDarkMode = false;
  
  constructor(private authService: AuthService, 
    public sidebarService: SidebarService,
    public darkModeService: DarkModeService
  ) {
    this.getUserName();
  }

  ngOnInit(): void {
    this.darkModeService.darkMode$.subscribe(mode => {
      this.isDarkMode = mode;
    });
  }

  logOut(): void {
    this.authService.logOut();
  }

  getUserName(): void {
    this.user = this.authService.getUserDetails();
    this.initial = this.getInitials(this.user);
  }

  getInitials(user: User): string {
    if (!user || !user.firstName || !user.lastName) {
      return AppConstants.EMPTY_STRING;
    }
    return user.firstName.charAt(0) + user.lastName.charAt(0);
  }
}


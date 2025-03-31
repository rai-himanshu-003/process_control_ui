import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  isSmallScreen = false;

  constructor(public sidebarService: SidebarService) {}


}

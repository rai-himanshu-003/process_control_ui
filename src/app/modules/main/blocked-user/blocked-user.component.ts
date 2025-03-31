import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blocked-user',
  templateUrl: './blocked-user.component.html',
  styleUrls: ['./blocked-user.component.scss']
})
export class BlockedUserComponent {

  supportEmail = environment.supportEmail;
}

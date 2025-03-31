import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private sidebarState = new BehaviorSubject<boolean>(true);
  public sidebarState$ = this.sidebarState.asObservable();

  toggleSidebar(): void {
    this.sidebarState.next(!this.sidebarState.value);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  public darkMode$ = new BehaviorSubject<boolean>(false);

  setDarkMode(isMode: boolean): void {
    this.darkMode$.next(isMode);
  }

  getDarkMode(): Observable<boolean> {
    return this.darkMode$.asObservable();
  }
}

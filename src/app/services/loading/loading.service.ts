import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  public loading$ = new BehaviorSubject<boolean>(false);

  setLoading(isLoading: boolean): void {
    this.loading$.next(isLoading);
  }
}

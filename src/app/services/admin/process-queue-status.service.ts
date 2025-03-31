import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { ProcessQueueStatus } from 'src/app/models/process-queue-status';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcessQueueStatusService {

  constructor(private httpService: HttpService) { }

  getQueueStatus(): Observable<ProcessQueueStatus[]> {
    return this.httpService.getQueueStatus();
  }
}

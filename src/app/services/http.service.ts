import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ProcessQueueStatus} from '../models/process-queue-status';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getQueueStatus = (): Observable<ProcessQueueStatus[]> => 
    this.http.get<ProcessQueueStatus[]>('../assets/json/process-ctrl-queue-status.json');

}


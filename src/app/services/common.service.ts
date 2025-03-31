import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseCode } from '../models/base-code-dto';
import { User } from '../models/user';
import { PcOutputResponse } from '../models/pc-output-response';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getBaseCode(): Observable<BaseCode[]> {
    return this.http.get<BaseCode[]>('../assets/json/base-code.json');
  }

  getUser(): Observable<PcOutputResponse<User>> {
    return this.http.get<PcOutputResponse<User>>('api/v1/user');
  }
}

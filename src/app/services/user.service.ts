import { UserApi } from '../models/UserApi';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  createNewUser(payload: UserApi): Observable<UserApi> {
    return this.http.post<UserApi>(
      'https://p1yhxxcdk5.execute-api.us-east-1.amazonaws.com/dev/users',
      payload
    );
  }
}

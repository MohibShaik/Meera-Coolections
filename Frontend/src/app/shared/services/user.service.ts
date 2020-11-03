import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../auth/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private jsonURL = '../../../assets/config/user-credentials.json';

  constructor(private http: HttpClient) {}

  public getUser(): Observable<User> {
    return this.http.get<User>(this.jsonURL);
  }
}

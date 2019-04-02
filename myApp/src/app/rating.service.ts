import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { User } from './clases/user';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  user: User = new User();

  getUser(): Observable<User> {
    return of(this.user);
  }

  constructor() { }
}

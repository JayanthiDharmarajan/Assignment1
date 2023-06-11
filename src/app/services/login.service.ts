import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private login = new BehaviorSubject(false);

  constructor(private router: Router) { }

  get currentLoginStatus$(){
        return this.login.asObservable();
  }

  userLogin(email: string, password: string | number) {
    if (email === 'helloe@humber.ca' && password === 'humber123') {
      this.login.next(true)
    }
  }

  userLogout() {
    this.login.next(false);
    this.router.navigateByUrl('/login')
  }
}

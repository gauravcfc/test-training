import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated(): boolean {
    return localStorage.getItem('token') === 'true';
  }

  setAuthentication(value: boolean): void {
    console.log('setAuthentication', value);
    localStorage.setItem('token', value.toString());
  }
}

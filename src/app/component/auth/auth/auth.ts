import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Signup } from '../signup/signup';
import { Theams } from '../../../services/bark-ligththem/theams';
import { Login } from "../login/login";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, Signup, Login],
  templateUrl: './auth.html',
  styleUrls: ['./auth.scss']
})
export class Auth {
  constructor(public themeService: Theams) {}

  isSignup = false;
  isLogin = false;

  // Optional if you want to control child visibility separately
  get isSignupVisible(): boolean {
    return this.isSignup;
  }

  get isLoginVisible(): boolean {
    return !this.isSignup;
  }
  toggleSignup() {
    this.isSignup = true;
    this.isLogin = false;
  }

  toggleLogin() {
    this.isSignup = false;
    this.isLogin = true;
  }
}

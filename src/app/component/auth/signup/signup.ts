import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostSignup } from './host-signup/host-signup';
import { GuestSignup } from './guest-signup/guest-signup';
import { BothSignup } from './both-signup/both-signup';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, HostSignup, GuestSignup, BothSignup],
  templateUrl: './signup.html',
  styleUrl: './signup.scss'
})
export class Signup {
  selectedRole: string = 'Host';
  roles: string[] = ['Host', 'Guest', 'Both'];

  selectRole(role: string) {
    this.selectedRole = role ;
  }
}

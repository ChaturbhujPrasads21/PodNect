import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostSignup } from './host-signup/host-signup';
import { GuestSignup } from './guest-signup/guest-signup';
import { BothSignup } from './both-signup/both-signup';
import { AgenciesSignup } from './agencies-signup/agencies-signup';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, HostSignup, GuestSignup, BothSignup, AgenciesSignup],
  templateUrl: './signup.html',
  styleUrl: './signup.scss'
})
export class Signup {
  selectedRole: string = '';
  roles: string[] = ['Host', 'Guest', 'Both', 'Agencies'];

  selectRole(role: string) {
    this.selectedRole = role;
  }
}

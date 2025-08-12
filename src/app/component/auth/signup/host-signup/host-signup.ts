import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  
@Component({
  selector: 'app-host-signup',
  imports: [CommonModule,FormsModule],
  templateUrl: './host-signup.html',
  styleUrl: './host-signup.scss'
})
export class HostSignup {
  host = {
    firstName: '',
    lastName: '',
    yearOfBirth: '',
    email: '',
    podcastName: '',
    password: '',
    confirmPassword: '',
    referred: false,
  };
  showPassword = false;
hosts: boolean = false;
  years: number[] = [];

  constructor() {
    const currentYear = new Date().getFullYear();
    for (let year = currentYear - 100; year <= currentYear; year++) {
      this.years.push(year);
    }
  }


  hostsToggle(){
    this.hosts=!this.hosts
    
  }
  onSubmit() {
    if (this.host.password !== this.host.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Form submitted:', this.host);
    // Add actual submission logic here (API call etc.)
  }
}

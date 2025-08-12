import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
loginData = {
  email: '',
  password: '',
  remember: false,
};

showPassword = false;

onLogin() {
  // Your login logic here
  console.log(this.loginData);
}

}

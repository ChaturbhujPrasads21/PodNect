import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./component/header/header/header";
import { Mains } from "./component/mains/mains/mains";

@Component({
  selector: 'app-root',
  imports: [Header, Mains],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('podnect');
}

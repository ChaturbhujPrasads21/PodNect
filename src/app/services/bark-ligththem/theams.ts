import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Theams {
  private currentThemeSubject = new BehaviorSubject<string>('light');
  public currentTheme$ = this.currentThemeSubject.asObservable();
  public isDarkTheme: boolean = false;

  constructor() { }

  getCurrentTheme(): string {
    return this.currentThemeSubject.value;
  }

  toggleTheme(): void {
    const currentTheme = this.getCurrentTheme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  setTheme(theme: string): void {
    document.documentElement.setAttribute('data-theme', theme);
    this.currentThemeSubject.next(theme);
    this.isDarkTheme = theme === 'dark';
  }
  
}

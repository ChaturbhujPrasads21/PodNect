import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Theams } from '../../../services/bark-ligththem/theams';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header implements OnInit {
  isDarkMode = false;
  isMenuOpen = false;

  dropdowns = {
    about: false,
    community: false,
    blog: false,
  };

  constructor(public themeService:Theams,private el: ElementRef) {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      this.isDarkMode = true;
      document.documentElement.classList.add('dark');
    }
     this.isMenuOpen = true;
  }

  ngOnInit(): void {
    !this.isMenuOpen;
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

 toggleDropdown(menu: 'about' | 'community' | 'blog') {
  for (const key in this.dropdowns) {
    this.dropdowns[key as 'about' | 'community' | 'blog'] = (key === menu) ? !this.dropdowns[menu] : false;
  }
}
  private removeHeroAnimation() {
    const body = this.el.nativeElement.querySelector('body');
    body.classList.remove('hero-anime');
  }
  toggleTheme(event: MouseEvent) {
    // Prevent default action of the event
    event.preventDefault();
  
    // Get the current theme
    const currentTheme = this.themeService.getCurrentTheme();
  
    // Toggle between light and dark themes
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
    // Set the new theme
    this.themeService.setTheme(newTheme);
  }
}

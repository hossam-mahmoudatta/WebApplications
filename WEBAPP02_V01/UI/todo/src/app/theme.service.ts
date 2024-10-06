import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ThemeService {

  private theme: string = 'light'; // Default theme

  constructor() {
    this.loadTheme();
  }

  private loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    this.theme = savedTheme ? savedTheme : this.theme;
    document.body.classList.add(this.theme + '-mode');
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', this.theme);
    this.updateBodyClass();
  }

  private updateBodyClass() {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(this.theme + '-mode');
  }
}

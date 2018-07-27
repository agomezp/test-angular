import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})

export class SettingsService {

  settings: ISettings = {
    themeUrl: 'assets/css/colors/default-dark.css',
    theme: 'default-dark'
  };

  constructor(@Inject(DOCUMENT) private _document) {
    this.loadSettings();
  }

  saveSettings() {
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }

  loadSettings() {
    const settingsItem = localStorage.getItem('settings');

    if (settingsItem) {
      this.settings = JSON.parse(settingsItem);
      this.applyTheme(this.settings.theme);
    }
  }

  applyTheme(theme: string) {

    const path = 'assets/css/colors/' + theme + '.css';
    this._document.getElementById('theme').setAttribute('href', path);

    this.settings.theme = theme;
    this.settings.themeUrl = path;

    this.saveSettings();
  }
}

interface ISettings {
  themeUrl: string;
  theme: string;
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
 private selectedTheme = new BehaviorSubject<string>('');
 themeOfApp = this.selectedTheme.asObservable();
  constructor() { }



 getThemeOfApp(data) {
    this.selectedTheme.next(data);
  }

}

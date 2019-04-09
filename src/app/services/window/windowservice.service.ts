import { Injectable } from '@angular/core';
function _window(): any {
  // return the global native browser window object
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class WindowserviceService {
  get nativeWindow(): any {
    return _window();
 }
  constructor() { }
}

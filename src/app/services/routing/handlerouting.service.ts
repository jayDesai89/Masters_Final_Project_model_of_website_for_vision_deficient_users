import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HandleroutingService {
  private stepNum = new BehaviorSubject<boolean>(true);
  checkStepNum = this.stepNum.asObservable();
  constructor(private router: Router) { }

  getStepNumber(pageNum) {
    console.log(pageNum);
    if (pageNum === 2) {
      this.router.navigate(['/selectproduct']);
    }
  }
}

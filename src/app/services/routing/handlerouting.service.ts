import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HandleroutingService {
  private stepNum = new BehaviorSubject<boolean>(true);
  checkStepNum = this.stepNum.asObservable();

  private pageOne = new BehaviorSubject<boolean>(false);
  checkStepOne = this.pageOne.asObservable();
  private pageTwo = new BehaviorSubject<boolean>(false);
  checkStepTwo = this.pageTwo.asObservable();
  private pageThree = new BehaviorSubject<boolean>(false);
  checkStepThree = this.pageThree.asObservable();
  private pageFour = new BehaviorSubject<boolean>(false);
  checkStepFour = this.pageFour.asObservable();
  constructor(private router: Router) { }

  getStepNumber(pageNum) {
    console.log(pageNum);
    if (pageNum === 1) {
      this.router.navigate(['/projectColors']);
    } else if (pageNum === 2) {
      this.router.navigate(['/selectproduct']);
    } else if (pageNum === 3) {
      this.router.navigate(['/productdetail']);
    } else if (pageNum === 4) {
      this.router.navigate(['/payment']);
    }
  }

  getpageOneValidation(dashboard) {
    this.pageOne.next(dashboard);
  }
  getpageTwoValidation(selectproduct) {
    this.pageTwo.next(selectproduct);
  }
  getpageThreeValidation(productdetail) {
    this.pageThree.next(productdetail);
  }
  getpageFourValidation(payment) {
    this.pageFour.next(payment);
  }
}

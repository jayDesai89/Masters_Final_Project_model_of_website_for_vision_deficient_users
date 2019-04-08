import { Router } from '@angular/router';
import { HandleroutingService } from './../services/routing/handlerouting.service';
import { ThemeService } from './../services/theme/theme.service';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent implements OnInit {
  otherTheme;
  routerLink;
  showError = false;
  showMessage:  string;
  AvoidCombinationsGreen = ['Green and Red', 'Green and Brown',
  'Green and Blue', 'Green-light and Yellow', 'Green and Grey', 'Green and black'];
  AvoidCombinationsBlue = ['Blue and purple', 'Blue and Green', 'Blue and Grey'];
  AvoidCombinationsRed = ['Red and Green', 'Red and Black', 'Red and Brown'];


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
  private themeService:  ThemeService,
  private handleRouting: HandleroutingService,
  private router: Router) {}

  ngOnInit() {
    this.themeService.themeOfApp.subscribe((res) => {
      console.log(res, 'This is from main componenet');
      this.otherTheme = res;
    });
  }

  pageTwoValidation(pageName) {
    // stay on Dashboard
    this.showError = false;
    this.handleRouting.checkStepOne.subscribe((res) => {
      console.log(res);
      if (res) {
        this.router.navigate([`/${pageName}`]);
      } else {
        this.showError = true;
        this.router.navigate(['/dashboard']);
        this.showMessage = 'Please selete the category';
      }
    });
  }
  pageThreeValidation(pageName) {
    // stay on Dashboard
    this.showError = false;
    this.handleRouting.checkStepTwo.subscribe((res) => {
      console.log(res);
      if (res) {
        this.router.navigate([`/${pageName}`]);
      } else {
        this.showError = true;
        this.router.navigate(['/selectproduct']);
        this.showMessage = 'Please selete the product';
      }
    });
  }
  pageFourValidation(pageName) {
    // stay on Dashboard
    this.showError = false;
    this.handleRouting.checkStepOne.subscribe((res) => {
      console.log(res);
      if (res) {
        this.router.navigate([`/${pageName}`]);
      } else {
        this.showError = true;
        this.router.navigate(['/dashboard']);
        this.showMessage = 'Please selete the category';
      }
    });
  }
}

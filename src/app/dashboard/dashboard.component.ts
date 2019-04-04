import { HandleroutingService } from './../services/routing/handlerouting.service';
import { ThemeService } from './../services/theme/theme.service';
import { Category } from './../model/categories';
import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { CategoriesService } from '../services/category/categories.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig, MatTableDataSource, Sort } from '@angular/material';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  category: Category;
  availableCategory;
  themeConfirmed;
  removeUserIsClicked: any;
  otherTheme = false;

  constructor(private categories: CategoriesService,
    public dialog: MatDialog,
    public theme: ThemeService,
    private handleRouting: HandleroutingService) { }

  ngOnInit() {
    this.categories.getCategory().subscribe((res) => {
      this.availableCategory = res.categories;
    });
    this.theme.themeOfApp.subscribe((res) => {
      this.themeConfirmed = res;
      if (this.themeConfirmed === '') {
        setTimeout(() => this.openSelectThemeDialog(), 800);
      } else {
        console.log(`yup it lready selected`);
      }
    });
  }

  ngAfterViewInit() {
    // this.openRemoveUserDialog();
  }
  changeTheme() {
    this.otherTheme = !this.otherTheme;
    }
  openSelectThemeDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass = 'removeUserBox';
    dialogConfig.data = {
      id: 2,
      title: 'resetPassword'
    };
    const dialogRef = this.dialog.open(SelectThemeDialogBox, dialogConfig);
    // tslint:disable-next-line:prefer-const
    dialogRef.afterClosed().subscribe((res) => {
      console.log(res);
      this.themeConfirmed = res;
      this.theme.getThemeOfApp(this.themeConfirmed);
    });
  }

  goNext(nextPage) {
    this.handleRouting.getStepNumber(nextPage);
  }
}



@Component({
  // tslint:disable-next-line:component-selector
  selector: 'themeSelect-dialog',
  templateUrl: 'themeSelectDialog.html',
  styleUrls: ['dashboard.component.scss']
})

// tslint:disable-next-line:component-class-suffix
export class SelectThemeDialogBox {
  description: any;
  selectedTheme = '';
  themes: string[] = ['Red', 'Blue', 'Green'];

  constructor(
    public dialogRef: MatDialogRef<SelectThemeDialogBox>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.description = data.description;
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    console.log(this.selectedTheme);
  }
  getSelectedTheme(theme) {
    console.log(`this is selected theme ${theme}`);
    // method from parent to delete user
    this.dialogRef.close(theme);
  }
}

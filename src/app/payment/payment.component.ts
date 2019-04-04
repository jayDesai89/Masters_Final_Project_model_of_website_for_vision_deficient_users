import { Component, OnInit, Inject } from '@angular/core';
import { ThemeService } from '../services/theme/theme.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig, MatDialog } from '@angular/material';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  appTheme;
  paymentForm;
  get billingFirstName() {
    return this.paymentForm.get('billingInfo.firstName');
  }
   get billingLastName() {
    return this.paymentForm.get('billingInfo.lastName');
  }
   get billingAddLineOne() {
    return this.paymentForm.get('billingAddress.addressLine1');
  }
   get billingAddCity() {
    return this.paymentForm.get('billingAddress.city');
  }
   get billingAddState() {
    return this.paymentForm.get('billingAddress.state');
  }
   get billingAddCountry() {
    return this.paymentForm.get('billingAddress.country');
  }
   get billingAddZip() {
    return this.paymentForm.get('billingAddress.zip');
  }
   get billingcardHolderName() {
    return this.paymentForm.get('paymentMethod.cardHolderName');
  }
  get billingcardHolderNumber() {
    return this.paymentForm.get('paymentMethod.cardNumber');
  }
  get billingcardHolderCvv() {
    return this.paymentForm.get('paymentMethod.cvvNumber');
  }
  constructor(public theme: ThemeService, private formBuilder: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.theme.themeOfApp.subscribe(res => this.appTheme = res);
       this.paymentForm = this.formBuilder.group({
      'billingInfo': new FormGroup({
        'firstName' : new FormControl('', [Validators.required]),
        'lastName' : new FormControl('', Validators.required)
      }),
      'billingAddress': new FormGroup({
        'addressLine1': new FormControl('', Validators.required),
        'addressLine2': new FormControl('asdf'),
        'city': new FormControl('asdf', Validators.required),
        'zip': new FormControl('adsf', Validators.required),
        'country': new FormControl('', Validators.required),
        'state': new FormControl('', Validators.required),
      }),
      'paymentMethod': new FormGroup({
        'cardHolderName': new FormControl('', Validators.required),
        'cardNumber': new FormControl('', Validators.required),
        'cvvNumber': new FormControl('', Validators.required),
      })
    });
  }

  openRreviewOrderDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass = 'removeUserBox';
    dialogConfig.data = {
      id: 2,
      title: 'resetPassword'
    };
    const dialogRef = this.dialog.open(PreviewOrderDialogBox, dialogConfig);
    // tslint:disable-next-line:prefer-const
    dialogRef.afterClosed().subscribe((res) => {
      console.log(res);
    });
  }

    validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({onlySelf: true});
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  submit() {
    this.validateAllFormFields(this.paymentForm);
    if (this.paymentForm.valid) {
      this.openRreviewOrderDialog();
    }
    console.log(this.paymentForm.value);
  }

}


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'previewOrder-dialog',
  templateUrl: 'previewOrder.html',
  styleUrls: ['payment.component.scss']
})

// tslint:disable-next-line:component-class-suffix
export class PreviewOrderDialogBox {
  description: any;
  selectedTheme = '';
  themes: string[] = ['Red', 'Blue', 'Green'];

  constructor(
    public dialogRef: MatDialogRef<PreviewOrderDialogBox>,
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

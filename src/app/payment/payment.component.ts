import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme/theme.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

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
  constructor(public theme: ThemeService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.theme.themeOfApp.subscribe(res => this.appTheme = res);
       this.paymentForm = this.formBuilder.group({
      'billingInfo': new FormGroup({
        'firstName' : new FormControl('', [Validators.required]),
        'lastName' : new FormControl('', Validators.required)
      }),
      'billingAddress': new FormGroup({
        'addressLine1': new FormControl('', Validators.required),
        'addressLine2': new FormControl(''),
        'city': new FormControl('', Validators.required),
        'zip': new FormControl('', Validators.required),
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
    console.log(this.paymentForm.value);
  }

}

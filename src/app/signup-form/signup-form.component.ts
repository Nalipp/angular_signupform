import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})

export class SignupFormComponent implements OnInit {
  email = '';
  password = '';
  confirmPassword = '';
  validBorder = '2px solid #4F8A10';
  invalidBorder = '2px solid #FFCCCC';

  getEmailBorder() {
    if (this.validEmail()) return this.validBorder;
    if (this.email.length > 0) return this.invalidBorder;
  }

  getPasswordBorder() {
    if (this.validatePassword()) return this.validBorder;
    if (this.password.length > 0) return this.invalidBorder;
  }

  getConfirmPasswordBorder() {
    if (this.passwordConfirmed()) return this.validBorder
    if (this.confirmPassword.length > 0) return this.invalidBorder;
  }

  validEmail() {
    var re = /(\w+)\@(\w+)\.[a-zA-Z]/g;
    return re.test(this.email);
  }

  validatePassword() {
    var length = /.{2}/;
    var nonAlpha = /(\d|\W)/;
    return length.test(this.password) && nonAlpha.test(this.password);
  }

  passwordConfirmed() {
    return (this.password === this.confirmPassword) 
           && this.password.length > 0;
  }

  validForm() {
    return this.validEmail() && this.passwordConfirmed();
  }

  ngOnInit() {
  }
}

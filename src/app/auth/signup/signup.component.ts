import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  isPrivacyPolicyChecked = false;
  passwordMismatch = false;
  googleUrl= 'javascript:alert("Sign in with google")';
  safeGoogleUrl : SafeUrl;
  constructor(private formBuilder: FormBuilder, 
              private router: Router,
              private senitizer: DomSanitizer) { 
              this.safeGoogleUrl = senitizer.bypassSecurityTrustUrl(this.googleUrl);
              }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
      privacyPolicy: ['', [Validators.required]]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(frm: FormGroup) {
    return frm.controls['password'].value === frm.controls['confirmPassword'].value ? null : { passwordMismatch: true };
  }

  onAgree(event) {
    if(event.checked) {
      this.isPrivacyPolicyChecked = event.checked; 
    }
  }

  onSubmit() {
    this.submitted = true;
    let password = this.registerForm.value.password;
    let confirmPassword = this.registerForm.value.confirmPassword;
    if (password !== confirmPassword) {
      console.log('password', password);
      this.passwordMismatch = true;
      return;
    }
    this.passwordMismatch =false;
    if (this.registerForm.invalid) {
      return;
    }
    if(this.isPrivacyPolicyChecked)
    {
      console.log('form', this.registerForm.value);
      let emailAddress = this.registerForm.value.email;
      password = this.registerForm.value.password;
      confirmPassword = this.registerForm.value.password;
      // localStorage.setItem("LoggedInUser",emailAddress);
      // this.authService.signup(emailAddress, password).subscribe(res => {
      // this.onSignUpMessage(res, this.registerForm);
      // });
      this.router.navigateByUrl('/task');
    }
  }
}

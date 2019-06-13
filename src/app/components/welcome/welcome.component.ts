import { Component, OnInit, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  inputs: HTMLCollectionOf<HTMLInputElement>;
  method: String = 'Welcome';

  constructor(private elRef: ElementRef, public authService: AuthService) {}

  ngOnInit() {
    this.inputs = (this.elRef
      .nativeElement as HTMLElement).getElementsByTagName("input");
  }

  signIn(email, password) {
    this.authService.SignIn(email, password)
  }
  
  signUp(email, password) {
    this.authService.SignUp(email,password)
  }

  forgotPassword(email) {
    this.authService.ForgotPassword(email);
  }

  signInMethod(emailInput: HTMLInputElement, passwordInput: HTMLInputElement) {
    if (this.method === "Sign In"){
      const email = emailInput.value;
      const password = passwordInput.value;
      return this.signIn(email, password);
    }
    this.revealInput(this.inputs.namedItem("email"));
    this.revealInput(this.inputs.namedItem("password"));
    this.hideInput(this.inputs.namedItem("name"));
    this.method = "Sign In";
    // this.router.navigateByUrl
  }

  signUpMethod(emailInput: HTMLInputElement, passwordInput: HTMLInputElement) {
    if (this.method === "Create Account") {
      const email = emailInput.value;
      const password = passwordInput.value;
      return this.signIn(email, password);
    }
    this.revealInput(this.inputs.namedItem("email"));
    this.revealInput(this.inputs.namedItem("password"));
    this.revealInput(this.inputs.namedItem("name"));
    this.method = "Create Account";
  }

  forgotPasswordMethod(emailInput: HTMLInputElement) {
    if ((this.method === "Forgot Password")) {
      const email = emailInput.value;
      return this.forgotPassword(email);
    }
    this.revealInput(this.inputs.namedItem("email"));
    this.hideInput(this.inputs.namedItem("password"));
    this.hideInput(this.inputs.namedItem("name"));
    this.method = "Forgot Password";
  }

  revealInput(input: HTMLInputElement) {
    input.style.visibility = "visible";
    setTimeout(() => {
      input.style.position = "relative";
      input.style.opacity = "1";
      input.style.padding = "12px 15px";
      input.style.height = "auto";
      input.style.width = "100%";
    }, 100);
  }

  hideInput(input: HTMLInputElement) {
    input.style.opacity = "0";
    input.style.padding = "0px";
    input.style.height = "0px";
    input.style.width = "0px";
    setTimeout(() => {
      input.style.visibility = "hidden";
    }, 100);
  }

}

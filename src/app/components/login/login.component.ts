import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup, FormBuilder } from 'ngx-strongly-typed-forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { LoginForm } from './login-form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup<LoginForm>;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group<LoginForm>({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
  }

  handleSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.userService
      .createNewUser({
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
        picture: 'tesr'
      })
      .subscribe(user => {
        console.log(user);
      });
    console.log(this.loginForm.value);
  }
}

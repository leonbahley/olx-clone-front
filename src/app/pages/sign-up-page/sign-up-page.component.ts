import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { SignUpUser } from 'src/app/store/actions/user.actions';
import { selectError } from 'src/app/store/selectors/user.selectors';
import { IAppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css'],
})
export class SignUpPageComponent {
  password!: string;
  confirmPassword!: string;
  signUpForm!: FormGroup;
  fieldTextTypePassword!: boolean;
  fieldTextTypeConfirmPassword!: boolean;
  error$ = this.store.pipe(select(selectError));
  constructor(private store: Store<IAppState>, private fb: FormBuilder) {}

  initsignUpForm() {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    const { name, email, password } = this.signUpForm.value;
    this.store.dispatch(new SignUpUser({ name, email, password }));
  }

  toggleFieldTextType(identifier: string) {
    if (identifier === 'password') {
      this.fieldTextTypePassword = !this.fieldTextTypePassword;
      return;
    }
    this.fieldTextTypeConfirmPassword = !this.fieldTextTypeConfirmPassword;
  }

  ngOnInit() {
    this.initsignUpForm();
  }
}

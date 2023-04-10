import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { LoginUser } from 'src/app/store/actions/user.actions';
import { selectError } from 'src/app/store/selectors/user.selectors';
import { IAppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.css'],
})
export class LogInPageComponent implements OnInit {
  signInForm!: FormGroup;
  fieldTextType!: boolean;
  error$ = this.store.pipe(select(selectError));

  constructor(private store: Store<IAppState>, private fb: FormBuilder) {}

  initSignInForm() {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    this.store.dispatch(new LoginUser(this.signInForm.value));
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  ngOnInit() {
    this.initSignInForm();
  }
}

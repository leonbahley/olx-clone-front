import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from './store/state/app.state';
import { RefreshUser } from './store/actions/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<IAppState>) {}
  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if (user) {
      this.store.dispatch(new RefreshUser(JSON.parse(user)));
    }
  }
}

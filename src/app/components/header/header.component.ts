import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { LogOut } from 'src/app/store/actions/user.actions';
import { selectEmail } from 'src/app/store/selectors/user.selectors';
import { IAppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private store: Store<IAppState>, private router: Router) {}
  loggedIn = false;
  email$ = this.store.pipe(select(selectEmail));

  logOut() {
    const href = this.router.url;
    if (href === '/liked') {
      this.router.navigate(['/']);
    }

    localStorage.removeItem('user');
    this.store.dispatch(new LogOut());
  }
}

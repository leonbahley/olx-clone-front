import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetProducts, Loading } from 'src/app/store/actions/products.actions';
import { IAppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.store.dispatch(new Loading());
    this.store.dispatch(new GetProducts());
  }
}

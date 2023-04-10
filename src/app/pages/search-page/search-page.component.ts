import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Loading, SearchByName } from 'src/app/store/actions/products.actions';
import { IAppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent {
  constructor(private store: Store<IAppState>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.store.dispatch(new Loading());
    this.store.dispatch(
      new SearchByName(this.route.snapshot.queryParams['name'])
    );
  }
}

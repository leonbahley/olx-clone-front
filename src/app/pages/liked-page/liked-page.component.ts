import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { IProduct } from 'src/app/interface/product.interface';
import {
  DeleteLikedProduct,
  GetLikedProducts,
} from 'src/app/store/actions/likedProducts.actions';
import { selectLikedProductList } from 'src/app/store/selectors/likedProducts.selectors';

import { IAppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-liked-page',
  templateUrl: './liked-page.component.html',
  styleUrls: ['./liked-page.component.css'],
})
export class LikedPageComponent implements OnInit {
  constructor(private store: Store<IAppState>) {}

  products$ = this.store.pipe(select(selectLikedProductList));

  deleteFromFavorites(product: IProduct) {
    this.store.dispatch(new DeleteLikedProduct(product.id));
  }

  ngOnInit(): void {
    this.store.dispatch(new GetLikedProducts());
  }
}

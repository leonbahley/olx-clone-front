import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IProduct } from 'src/app/interface/product.interface';
import {
  AddLikedProduct,
  DeleteLikedProduct,
  GetLikedProducts,
} from 'src/app/store/actions/likedProducts.actions';
import { selectLikedProductList } from 'src/app/store/selectors/likedProducts.selectors';
import {
  selectLoading,
  selectProductList,
} from 'src/app/store/selectors/products.selectors';
import { selectEmail } from 'src/app/store/selectors/user.selectors';
import { IAppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  constructor(private store: Store<IAppState>) {}

  email!: string | null;
  likedProductsIds: number[] = [];
  likedProducts = this.store
    .pipe(select(selectLikedProductList))
    .subscribe(
      (prods) => (this.likedProductsIds = prods.map((item) => item.id))
    );

  loggedIn$ = this.store
    .pipe(select(selectEmail))
    .subscribe((res) => (this.email = res));
  products$ = this.store.pipe(select(selectProductList));
  loading$ = this.store.pipe(select(selectLoading));

  manageFavorites(product: IProduct) {
    if (this.likedProductsIds.includes(product.id)) {
      this.store.dispatch(new DeleteLikedProduct(product.id));
      return;
    }
    this.store.dispatch(new AddLikedProduct(product));
  }

  ngOnInit() {
    if (this.email) {
      this.store.dispatch(new GetLikedProducts());
    }
  }

  ngOnDestroy(): void {
    this.likedProducts.unsubscribe();
    this.loggedIn$.unsubscribe();
  }
}

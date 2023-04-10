import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { IProduct } from 'src/app/interface/product.interface';
import {
  AddLikedProduct,
  DeleteLikedProduct,
  GetLikedProducts,
} from 'src/app/store/actions/likedProducts.actions';
import {
  GetProductItem,
  Loading,
} from 'src/app/store/actions/products.actions';
import { selectLikedProductList } from 'src/app/store/selectors/likedProducts.selectors';
import { selectProductItem } from 'src/app/store/selectors/products.selectors';
import { selectEmail } from 'src/app/store/selectors/user.selectors';
import { IAppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-product-item-page',
  templateUrl: './product-item-page.component.html',
  styleUrls: ['./product-item-page.component.css'],
})
export class ProductItemPageComponent implements OnInit {
  constructor(private store: Store<IAppState>, private route: ActivatedRoute) {}
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
  selectedProduct$ = this.store.pipe(select(selectProductItem));

  manageFavorites(product: IProduct) {
    if (this.likedProductsIds.includes(product.id)) {
      this.store.dispatch(new DeleteLikedProduct(product.id));
      return;
    }
    this.store.dispatch(new AddLikedProduct(product));
  }

  ngOnInit(): void {
    if (this.email) {
      this.store.dispatch(new GetLikedProducts());
    }
    this.store.dispatch(new Loading());
    this.store.dispatch(new GetProductItem(this.route.snapshot.params['id']));
  }

  ngOnDestroy(): void {
    this.likedProducts.unsubscribe();
    this.loggedIn$.unsubscribe();
  }
}

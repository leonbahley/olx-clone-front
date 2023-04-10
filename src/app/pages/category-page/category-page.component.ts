import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { GetProductsByCategorySuccess, Loading } from 'src/app/store/actions/products.actions';
import { IAppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css'],
})
export class CategoryPageComponent implements OnInit {
  constructor(
    private store: Store<IAppState>,
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new Loading());
    this.productsService
      .getByCategorie(this.route.snapshot.params['category'])
      .subscribe(
        (products) =>
          this.store.dispatch(
            new GetProductsByCategorySuccess(products.products)
          ),
        (error) => {
          EMPTY;
        }
      );
  }
}

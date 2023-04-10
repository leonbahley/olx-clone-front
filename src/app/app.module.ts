import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LogInPageComponent } from './pages/log-in-page/log-in-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductItemPageComponent } from './pages/product-item-page/product-item-page.component';
import { NgbdCarouselBasic } from './components/carousel/carousel.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/reducers/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './store/effects/products.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { UserEffects } from './store/effects/user.effects';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { LikedPageComponent } from './pages/liked-page/liked-page.component';
import { LikedProductsEffects } from './store/effects/likedProducts.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogInPageComponent,
    MainPageComponent,
    ProductsComponent,
    ProductItemPageComponent,
    CategoriesComponent,
    CategoryPageComponent,
    SearchBarComponent,
    SearchPageComponent,
    SignUpPageComponent,
    LikedPageComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgbdCarouselBasic,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([ProductsEffects, UserEffects, LikedProductsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

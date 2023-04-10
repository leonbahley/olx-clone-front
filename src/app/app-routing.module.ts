import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LogInPageComponent } from './pages/log-in-page/log-in-page.component';
import { ProductItemPageComponent } from './pages/product-item-page/product-item-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { LikedPageComponent } from './pages/liked-page/liked-page.component';

const routes: Routes = [
  {
    path: 'search',
    component: SearchPageComponent,
  },
  {
    path: 'categories/:category',
    component: CategoryPageComponent,
  },
  { path: 'product/:id', component: ProductItemPageComponent },
  { path: '', component: MainPageComponent },
  { path: 'log-in', component: LogInPageComponent },
  { path: 'sign-up', component: SignUpPageComponent },
  { path: 'liked', component: LikedPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

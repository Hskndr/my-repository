import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, AboutComponent } from './components';


const routes: Routes = [
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./auth/lregister/lregister.module').then(m => m.LregisterModule) },
  { path: 'finance', loadChildren: () => import('./modules/finance/finance.module').then(m => m.FinanceModule) },
  { path: 'portfolio', loadChildren: () => import('./modules/portfolio/portfolio.module').then(m => m.PortfolioModule) },
  { path: 'blog', loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule) },
  { path: 'shopping', loadChildren: () => import('./modules/shopping/shopping.module').then(m => m.ShoppingModule) },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

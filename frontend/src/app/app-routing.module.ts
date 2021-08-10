import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookEditComponent } from './page/book-edit/book-edit.component';
import { BookComponent } from './page/book/book.component';
import { CdComponent } from './page/cd/cd.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { LoanComponent } from './page/loan/loan.component';
import { LoginComponent } from './page/login/login.component';
import { MagazineComponent } from './page/magazine/magazine.component';
import { UserComponent } from './page/user/user.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'users',
    component: UserComponent,
  },
  {
    path: 'books',
    component: BookComponent,
  },
  {
    path: 'books/edit/:id',
    component: BookEditComponent,
  },
  {
    path: 'cds',
    component: CdComponent,
  },
  {
    path: 'loans',
    component: LoanComponent,
  },
  {
    path: 'magazines',
    component: MagazineComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

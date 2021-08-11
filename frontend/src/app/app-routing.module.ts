import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MagazineCreateComponent } from './page/magazine-create/magazine-create.component';
import { MagazineComponent } from './page/magazine/magazine.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { LoginComponent } from './page/login/login.component';
import { CdsComponent } from './page/cds/cds.component';
import { BookEditComponent } from './page/book-edit/book-edit.component';
import { BooksComponent } from './page/books/books.component';
import { UsersComponent } from './page/users/users.component';
import { LoansComponent } from './page/loans/loans.component';
import { BookCreateComponent } from './page/book-create/book-create.component';
import { UserEditComponent } from './page/user-edit/user-edit.component';
import { UserCreateComponent } from './page/user-create/user-create.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'users/edit/:id',
    component: UserEditComponent,
  },
  {
    path: 'users/create',
    component: UserCreateComponent,
  },
  {
    path: 'books',
    component: BooksComponent,
  },
  {
    path: 'books/edit/:id',
    component: BookEditComponent,
  },
  {
    path: 'books/create',
    component: BookCreateComponent,
  },
  {
    path: 'magazines',
    component: MagazineComponent,
  },
  {
    path: 'magazines/create',
    component: MagazineCreateComponent,
  },
  {
    path: 'cds',
    component: CdsComponent,
  },
  {
    path: 'loans',
    component: LoansComponent,
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

import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeHu from '@angular/common/locales/hu';

registerLocaleData(localeHu);

import { AreusFormModule } from './areus-form/areus-form.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { SideNavComponent } from './common/side-nav/side-nav.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { UsersComponent } from './page/users/users.component';
import { BooksComponent } from './page/books/books.component';
import { CdsComponent } from './page/cds/cds.component';
import { LoansComponent } from './page/loans/loans.component';
import { DataTableComponent } from './common/data-table/data-table.component';
import { XPipePipe } from './pipe/x-pipe.pipe';
import { LoginComponent } from './page/login/login.component';
import { BookEditComponent } from './page/book-edit/book-edit.component';
import { JwtInterceptorInterceptor } from './service/jwt-interceptor.interceptor';
import { MagazineComponent } from './page/magazine/magazine.component';
import { MagazineCreateComponent } from './page/magazine-create/magazine-create.component';
import { BookCreateComponent } from './page/book-create/book-create.component';
import { UserEditComponent } from './page/user-edit/user-edit.component';
import { UserCreateComponent } from './page/user-create/user-create.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SideNavComponent,
    DashboardComponent,
    UsersComponent,
    BooksComponent,
    CdsComponent,
    LoansComponent,
    DataTableComponent,
    XPipePipe,
    LoginComponent,
    BookEditComponent,
    MagazineComponent,
    MagazineCreateComponent,
    BookCreateComponent,
    UserEditComponent,
    UserCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AreusFormModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'hu-HU'},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

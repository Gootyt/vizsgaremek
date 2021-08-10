import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { SidenavComponent } from './common/sidenav/sidenav.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { BookComponent } from './page/book/book.component';
import { CdComponent } from './page/cd/cd.component';
import { LoanComponent } from './page/loan/loan.component';
import { MagazineComponent } from './page/magazine/magazine.component';
import { UserComponent } from './page/user/user.component';
import { DatatableComponent } from './common/datatable/datatable.component';
import { LoginComponent } from './page/login/login.component';
import { BookEditComponent } from './page/book-edit/book-edit.component';
import { AreusFormModule } from './areus-form/areus-form.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SidenavComponent,
    DashboardComponent,
    BookComponent,
    CdComponent,
    LoanComponent,
    MagazineComponent,
    UserComponent,
    DatatableComponent,
    LoginComponent,
    BookEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AreusFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

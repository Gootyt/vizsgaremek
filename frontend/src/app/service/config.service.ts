import { Injectable } from '@angular/core';

export interface ITableColumn {
  title: string;
  key: string;
  hidden?: boolean;
  outputTransform?: any;
  htmlOutput?: any;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public readonly apiUrl: string = 'http://localhost:3000/';

  userColumns: ITableColumn[] = [
    {key: "_id", title: "#"},
    {key: "firstName", title: "First Name"},
    {key: "lastName", title: "Last Name"},
    {key: "email", title: "Email"},
    {key: "address", title: "Address"},
    {key: "active", title: "Active", htmlOutput: ConfigService.activeOrInactiveSign},
  ];

  bookColumns: ITableColumn[] = [
    {key: "_id", title: "#"},
    {key: "writer", title: "Writer"},
    {key: "title", title: "Title"},
    {key: "length", title: "Length"},
    {key: "style", title: "Style"},
    {key: "onloan", title: "On loan", htmlOutput: ConfigService.activeOrInactiveSign},
  ];

  cdColumns: ITableColumn[] = [
    {key: "_id", title: "#"},
    {key: "performer", title: "Performer"},
    {key: "title", title: "Title"},
    {key: "length", title: "Length"},
    {key: "style", title: "Style"},
  ];

  loanColumns: ITableColumn[] = [
    {key: "_id", title: "#"},
    {key: "borrower", title: "Borrower"},
    {key: "loanedbook", title: "Loaned book"},
    {key: "loandate", title: "Loan date"},
    {key: "loanend", title: "Loan end"},
  ];

  magazineColumns: ITableColumn[] = [
    {key: "_id", title: "#"},
    {key: "title", title: "Title"},
    {key: "year", title: "Year"},
    {key: "month", title: "Month"},
    {key: "description", title: "Description"},
  ];

  constructor() { }

  static activeOrInactiveSign(v: boolean): string {
    const icon: string = v ? 'fa-check' : 'fa-times';
    return `<i class="fas ${icon}"></i>`
  }
}

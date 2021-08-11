import { CurrencyPipe, SlicePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { get } from 'lodash';

export interface ITableColumn {
  title: string;
  key: string;
  hidden?: boolean;
  outputTransform?: any;
  htmlOutput?: any;
  pipes?: any[];
  pipeArgs?: any[][];
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public readonly apiUrl: string = 'http://127.0.0.1:3000/';

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
 

  magazineColumns: ITableColumn[] = [
    {key: "_id", title: "#"},
    {key: "title", title: "Title"},
    {key: "year", title: "Year"},
    {key: "month", title: "Month"},
    {key: "description", title: "Description"},
  ]; 

  loanColumns: ITableColumn[] = [
    {key: "_id", title: "#"},
    {key: "borrower", title: "Borrower"},
    {key: "loanedbook", title: "Loaned book"},
    {key: "loandate", title: "Loan date"},
    {key: "loanend", title: "Loan end"},
  ]; 

  constructor() { }

  static activeOrInactiveSign(v: boolean): string {
    console.log(`fn is running: ${v}`);
    const icon: string = v ? 'fa-check' : 'fa-ban';
    return `<i class="fas ${icon}"></i>`;
  }

  // row.customer.name => (row, 'customer.name')
  static getSubProperty(obj: any, ...keys: string[]): string | number | boolean | undefined {
    return keys.map( key => get(obj, key) ).join(' ');
  }

  static sqlDate(jsTime: number | string | Date): string | number | boolean | undefined {

    const serverDate = jsTime instanceof Date ? jsTime : new Date(jsTime);

    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    };

    return Intl.DateTimeFormat('hu', options).format(serverDate);

  }

  static curveLongString(
    data: string,
    start: number,
    end: number,
    curve: string = '...'
  ): string {
    return data.slice(start, end) + curve;
  }

}

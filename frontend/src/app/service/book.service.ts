import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class BookService extends BaseService<Book> {

  constructor(
    public config: ConfigService,
    public http: HttpClient, 
  ) {
    super(config, http);
    this.entity = 'books';
   }
}

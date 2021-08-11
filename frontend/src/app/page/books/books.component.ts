import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from 'src/app/model/book';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  tableColumns: ITableColumn[] = this.config.bookColumns;
  list$: Observable<Book[]> = this.bookService.getAll();

  constructor(
    private config: ConfigService,
    private bookService: BookService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSelectOne(book: Book): void {
    this.router.navigate(['/', 'books', 'edit', book._id]);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/service/book.service';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

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

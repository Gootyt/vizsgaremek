import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FieldBase } from 'src/app/areus-form/model/field-base';
import { InputField } from 'src/app/areus-form/model/input-field';
import { SelectField } from 'src/app/areus-form/model/select-field';
import { TextareaField } from 'src/app/areus-form/model/textarea-field';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {

  book$: Observable<Book> = this.ar.params.pipe(
    switchMap(params => this.bookService.get(params.id))
  );

  book: Book = new Book();
  fields: FieldBase<any>[] = [];
  showForm: boolean = false;

  constructor(
    private bookService: BookService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.book$.subscribe(
      book => {
        this.book = book;
        this.setForm();
        this.showForm = true;
      }
    );
  }

  setForm(): void {
    // _id: string = '';
    // writer: string = '';
    // title: string = '';
    // length: number = 0;
    // style: string = '';
    // onloan: boolean = false;
    this.fields = [
      new InputField({ key: '_id', label: '', type: 'hidden', value: this.book._id }),
      new InputField({
        key: 'writer', label: 'Writer', type: 'text', value: this.book.writer,
        validators: [Validators.required, Validators.minLength(5), Validators.pattern(/^[A-Ű]{1}.*$/)], errorMessage: 'Writer is required.'
      }),
      new InputField({
        key: 'title', label: 'Title', type: 'text', value: this.book.title,
        validators: [Validators.required, Validators.minLength(5), Validators.pattern(/^[A-Ű]{1}.*$/)], errorMessage: 'Title is required.'
      }),
      new InputField({ key: 'length', label: 'Length', type: 'number', value: (this.book.length as unknown as string) }),
      new InputField({ key: 'style', label: 'Style', type: 'text', value: this.book.style }),
      // new SelectField({ key: 'onloan', label: 'On Loan', type: 'checkbox', value: this.book.onloan }),
    ];
  }

  onSave(book: Book): void {
    this.bookService.update(book).subscribe(
      p => this.router.navigate(['/', 'books'])
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from 'src/app/shared/services/books.service';
import { book } from 'src/app/shared/models/book.model';

@Component({
  selector: 'app-book-content',
  templateUrl: './book-content.component.html',
  styleUrls: ['./book-content.component.scss'],
})
export class BookContentComponent implements OnInit {
  private params: any;
  private bookId: string;
  public books: book[];
  public selectedBook: book;
  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BooksService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAllBooks();
    this.params = this.activatedRoute.params.subscribe((params) => {
      this.bookId = params['book.id'];
    });
  }

  public loadAllBooks(): void {
    this.bookService.getBooksData().subscribe((booksData) => {
      this.books = booksData;
      this.selectedBook = this.books.find((book) => book.id === this.bookId);
    });
  }
}

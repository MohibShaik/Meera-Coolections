import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/shared/services/books.service';
import { book } from 'src/app/shared/models/book.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent implements OnInit {
  public books: book[];
  public filteredBooks: book[];
  public filterItems = [
    { value: 'JavaScript-Programming', viewValue: 'Javascript Books' },
    { value: 'Motivation', viewValue: 'Motivation' },
    {
      value: 'Application-Architecture',
      viewValue: 'Application Architecture',
    },
    { value: 'Java-Programming', viewValue: 'Java Programming' },
  ];

  constructor(
    private bookService: BooksService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadBooksData();
  }

  public loadBooksData(): void {
    this.bookService.getBooksData().subscribe((booksData) => {
      this.books = booksData;
      this.filteredBooks = JSON.parse(JSON.stringify(this.books));
    });
  }

  public openBookDetails(book: book): void {
    this.router.navigate(['book-content', book.id], {
      relativeTo: this.activatedRoute,
    });
  }

  public addBook(): void {
    console.log('Add Book clicked');
  }

  public removeBook(book: book): void {
    var index = this.filteredBooks
      .map((x) => {
        return x.id;
      })
      .indexOf(book.id);

    this.filteredBooks.splice(index, 1);
  }

  public onFilterSelection($event): void {
    let selectedFilter = $event.value;

    this.filteredBooks = this.books.filter((book) => {
      return book.category === selectedFilter;
    });
  }
}

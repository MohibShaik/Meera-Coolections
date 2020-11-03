import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { book } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private jsonURL = '../../../assets/config/books-data.json';
  constructor(private http: HttpClient) {}

  public getBooksData(): Observable<book[]> {
    return this.http.get<book[]>(this.jsonURL);
  }
}

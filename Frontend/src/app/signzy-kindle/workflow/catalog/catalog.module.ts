import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { BooksListComponent } from './books-list/books-list.component';
import { CatalogComponent } from './catalog.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule } from '@angular/forms';
import { BookContentComponent } from './book-content/book-content.component';

@NgModule({
  declarations: [BooksListComponent, CatalogComponent, BookContentComponent],
  imports: [CommonModule, CatalogRoutingModule, MaterialModule, FormsModule],
})
export class CatalogModule {}

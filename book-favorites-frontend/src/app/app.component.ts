import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { SearchBooksComponent } from "./search-books/search-books.component";
import { FavoriteBooksComponent } from "./favortie-books/favortie-books.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, SearchBooksComponent, FavoriteBooksComponent],
  template: `
    <app-search-books></app-search-books>
    <app-favorite-books></app-favorite-books>
  `,
})
export class AppComponent {}


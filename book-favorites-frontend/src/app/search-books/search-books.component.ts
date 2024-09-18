import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, CommonModule } from '@angular/common'; // Adicione o CommonModule aqui

@Component({
  selector: 'app-search-books',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, CommonModule], // Inclua CommonModule nos imports
  template: `
  <!-- gambiarra pra ocultar um bugzin -->
  <div *ngIf="books.length > 0" class="overlay"></div>
  <!-- gambiarra pra ocultar um bugzin -->
  
  <div class="input-box">
    <i class="uil uil-search"></i>
    <input type="text" [(ngModel)]="searchQuery" placeholder="Pesquisar livros...">
    <button (click)="searchBooks()" class="button">Pesquisar</button>
  </div>
  
  <div class="search-results" *ngIf="books.length > 0">
    <p>Resultados da pesquisa</p>
    <ul>
      <li *ngFor="let book of books" class="book-result">
        <img *ngIf="book.volumeInfo.imageLinks" [src]="book.volumeInfo.imageLinks.thumbnail" alt="Book Cover" class="book-image">
        <div class="book-details">
          <h4 class="book-title">{{ book.volumeInfo.title }}</h4>
          <p class="book-author">{{ book.volumeInfo.authors?.join(', ') }}</p>
          <p class="book-description">
            {{ book.showMore ? book.volumeInfo.description : (book.volumeInfo.description | slice:0:150) + '...' }}
          </p>
          <button *ngIf="book.volumeInfo.description.length > 150" (click)="book.showMore = !book.showMore">
            {{ book.showMore ? 'Ler menos' : 'Ler mais' }}
          </button>
        </div>
        <button (click)="addFavorite(book)" class="add-favorite-btn">Adicionar aos favoritos</button>
      </li>
    </ul>
  </div>
  
  `
})
export class SearchBooksComponent {
  searchQuery: string = '';
  books: any[] = [];

  constructor(private http: HttpClient) {}

  searchBooks() {
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${this.searchQuery}`;
    this.http.get(apiUrl).subscribe((response: any) => {
      this.books = response.items.map((book: any) => ({
        ...book,
        showMore: false // Propriedade para controlar a expansão da descrição
      }));
    });
  }

  addFavorite(book: any) {
    const favoriteBook = {
      book_id: book.id,
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors?.join(', '),
      description: book.volumeInfo.description,
      thumbnail: book.volumeInfo.imageLinks?.thumbnail
    };
  
    this.http.post('http://127.0.0.1:8000/api/favorites/', favoriteBook).subscribe(
      response => {
        console.log('Livro adicionado aos favoritos:', response);
      },
      error => {
        console.error('Erro ao adicionar o livro aos favoritos:', error);
      }
    );
  }
}

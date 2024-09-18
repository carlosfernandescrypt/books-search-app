import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorite-books',
  standalone: true,
  imports: [NgFor, FormsModule, CommonModule],
  template: `
  <div class="filter-section">
    <select class="button" id="tagFilter" [(ngModel)]="selectedTag" (change)="filterByTag()">
      <option value="">Todas as Tags</option>
      <option *ngFor="let tag of uniqueTags" [value]="tag">{{ tag }}</option>
    </select>
  </div>

  <div class="favorite-books" *ngIf="filteredFavorites.length > 0">
    <ul>
      <li *ngFor="let favorite of filteredFavorites" class="favorite-item">

        <div class="book-thumbnail-container">
          <img [src]="favorite.thumbnail" alt="Livro sem capa" class="book-thumbnail">
        </div>

        <div class="book-info">
          <h4 class="book-title">{{ favorite.title }}</h4>
          <p class="book-author">{{ favorite.author }}</p>
          <blockquote class="book-description">
            {{ favorite.description.length > 300 ? (favorite.description | slice: 0:300) + '...' : favorite.description }}
          </blockquote>

          <div class="input-fields">
            <div class="input-field">
              <label for="rating">Nota:</label>
              <input id="rating" type="number" [(ngModel)]="favorite.rating" min="1" max="5" class="input-rating">
            </div>

            <div class="input-field">
              <label for="tags">Tags:</label>
              <input id="tags" type="text" [(ngModel)]="favorite.tags" placeholder="(tags)" class="input-tags">
            </div>

            <div class="input-field">
              <label for="notes">Anotações:</label>
              <textarea id="notes" [(ngModel)]="favorite.notes" placeholder="(anotações)" class="input-notes"></textarea>
            </div>
          </div>

          <div class="action-buttons">
            <button (click)="updateFavorite(favorite)" class="btn save-btn">Salvar</button>
            <button (click)="removeFavorite(favorite.id)" class="btn remove-btn">Remover dos favoritos</button>
          </div>
        </div>
      </li>
    </ul>
  </div>

  <div *ngIf="filteredFavorites.length === 0">
    <p>Nenhum livro encontrado com a tag selecionada.</p>
  </div>
  `
})
export class FavoriteBooksComponent implements OnInit {
  favorites: any[] = [];
  filteredFavorites: any[] = [];
  uniqueTags: string[] = [];
  selectedTag: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites() {
    this.http.get('http://127.0.0.1:8000/api/favorites/').subscribe((response: any) => {
      this.favorites = response;
      this.filteredFavorites = this.favorites;
      this.extractUniqueTags();
    }, (error) => {
      console.error('Error loading favorites:', error);
    });
  }

  extractUniqueTags() {
    const allTags = this.favorites.flatMap(fav => fav.tags.split(',').map((tag: string) => tag.trim()));
    this.uniqueTags = [...new Set(allTags)]; //removr tags duplicadas
  }

  filterByTag() {
    if (this.selectedTag === '') {
      this.filteredFavorites = this.favorites;
    } else {
      this.filteredFavorites = this.favorites.filter(fav => 
        fav.tags.split(',').map((tag: string) => tag.trim()).includes(this.selectedTag)
      );
    }
  }

  updateFavorite(favorite: any) {
    this.http.put(`http://127.0.0.1:8000/api/favorites/${favorite.id}/`, favorite).subscribe(
      response => {
        console.log('Book updated:', response);
      },
      error => {
        console.error('Error updating book:', error);
      }
    );
  }

  removeFavorite(favoriteId: number) {
    this.http.delete(`http://127.0.0.1:8000/api/favorites/${favoriteId}/`).subscribe(
      response => {
        console.log('Book removed from favorites:', response);
        this.loadFavorites();
      },
      error => {
        console.error('Error removing book:', error);
      }
    );
  }
}

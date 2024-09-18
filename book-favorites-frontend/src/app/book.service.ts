import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = '/api';

  constructor(private http: HttpClient) { }


  searchBooks(query: string): Observable<any> {
    const url = `${this.apiUrl}/search_books/?q=${query}`;
    return this.http.get<any>(url);
  }


  addFavoriteBook(book: any): Observable<any> {
    const url = `${this.apiUrl}/favorite_books/`;
    return this.http.post<any>(url, book);
  }


  getFavoriteBooks(): Observable<any> {
    const url = `${this.apiUrl}/favorite_books/`;
    return this.http.get<any>(url);
  }


  removeFavoriteBook(id: number): Observable<any> {
    const url = `${this.apiUrl}/favorite_books/${id}/`;
    return this.http.delete<any>(url);
  }

  updateFavoriteBook(favorite: any): Observable<any> {
    const url = `${this.apiUrl}/favorite_books/${favorite.id}/`;
    return this.http.put<any>(url, favorite);
}


}

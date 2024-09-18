import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavortieBooksComponent } from './favortie-books.component';

describe('FavortieBooksComponent', () => {
  let component: FavortieBooksComponent;
  let fixture: ComponentFixture<FavortieBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavortieBooksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavortieBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

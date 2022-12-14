import { product } from './../models/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: product[] = [];
  cart: [product, number];
  data = '../../assets/data.json';
  constructor(private http: HttpClient) {
    this.cart = [
      {
        id: 1,
        name: '',
        price: 1,
        url: '',
        description: '',
      },
      1,
    ];
  }

  getProducts(): Observable<product[]> {
    return this.http.get<product[]>(this.data);
  }

  getCart(): [product, number] {
    return this.cart;
  }

  addToCart(p: product, amount: number): void {
    this.cart.push(p, amount);
  }
}

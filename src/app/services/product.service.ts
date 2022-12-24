import { product } from './../models/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: product[] = [];
  cart: product[] = [];
  items: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  data = '../../assets/data.json';
  total: number = 0;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<product[]> {
    return this.http.get<product[]>(this.data);
  }

  getCart(): product[] {
    return this.cart;
  }

  getNumbers(): number[] {
    return this.items;
  }

  getTotal(): number {
    return this.total;
  }

  addToCart(p: product, quantity: number): void {
    const productExists = this.cart.find((data) => data.id === p.id) as product;
    if (!productExists) {
      this.cart.push({ ...p, quantity: quantity });
    } else {
      productExists.quantity += quantity;
    }
  }
}

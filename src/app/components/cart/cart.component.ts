import { product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getCart();
  }

  addToCart(p: product, amount: number): void {
    this.productService.addToCart(p, amount);
  }
}

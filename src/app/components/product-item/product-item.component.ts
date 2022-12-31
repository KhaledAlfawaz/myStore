import { product } from './../../models/product';
import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: product;
  @Input() numbers: number[] = [];

  constructor(private productService: ProductService) {
    this.product = {
      id: 1,
      name: '',
      price: 1,
      url: '',
      description: '',
      quantity: 0,
    };
  }
  ngOnInit(): void {
    this.numbers = this.productService.getNumbers();
  }

  addToCart(p: product, quantity: number): void {
    this.productService.addToCart(p, quantity);
  }
}

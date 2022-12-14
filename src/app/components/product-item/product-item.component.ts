import { product } from './../../models/product';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: product;
  @Output() data: EventEmitter<product> = new EventEmitter();
  
  constructor(private productService: ProductService) {
    this.product = {
      id: 1,
      name: '',
      price: 1,
      url: '',
      description: '',
    };
  }

  addToCart(p: product, amount: number): void {
    this.productService.addToCart(p, amount);
  }
}

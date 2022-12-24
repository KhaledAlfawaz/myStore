import { product } from './../../models/product';
import {
  Component,
  
  OnChanges,
  OnInit,
  
} from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnChanges {
  cart: product[] = [];
  total: number = 0;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.cart = this.productService.getCart();
    this.total = this.getTotal();
  }

  ngOnChanges(): void {
    
  }

  changeTotal(p: product): number {
    if (p.quantity < 10) this.total += p.price * p.quantity;
    return this.total;
  }

  getTotal(): number {
    return Math.round(this.total * 100) / 100;
  }
}

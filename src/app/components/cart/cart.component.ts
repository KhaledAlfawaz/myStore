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
    this.total = this.changeTotal()
  }

  ngOnChanges(): void {
    this.total = this.changeTotal();
  }

  changeTotal(): number {
    this.total = 0;
    for (let index = 0; index < this.cart.length; index++) {
      this.total += this.cart[index].quantity * this.cart[index].price
    }
    return Math.round(this.total * 100) / 100;
  }

  
}

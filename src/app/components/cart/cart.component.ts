import { product } from './../../models/product';
import { Component, OnChanges, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnChanges {
  cart: product[] = [];
  total: number = 0;
  fullName: string;
  address: string;
  cardNumber: unknown;
  constructor(private productService: ProductService, private router: Router) {
    this.fullName = '';
    this.address = '';
    this.cardNumber as number;
  }

  ngOnInit(): void {
    this.cart = this.productService.getCart();
    this.total = this.getTotal();
  }

  ngOnChanges(): void {
    this.total = this.getTotal();
  }

  getTotal(): number {
    this.total = 0;
    for (let index = 0; index < this.cart.length; index++) {
      this.total += this.cart[index].quantity * this.cart[index].price;
      this.total = Math.round(this.total * 100) / 100;
    }
    this.productService.setTotal(this.total);
    return this.total;
  }

  deleteProduct(p: product): void {
    this.cart = this.cart.filter((data) => data.id !== p.id);
    this.productService.setCart(this.cart.filter((data) => data.id !== p.id));
    this.total = this.getTotal();
    alert(`product ${p.name} is deleted succsessfuly`);
  }

  submitForm() {
    this.productService.setUser(this.fullName);
    this.productService.setCart([]);
    this.router.navigateByUrl('/confirmation');
  }
}

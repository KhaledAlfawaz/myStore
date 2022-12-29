import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  id: number = 0;
  product: product;
  numbers: number[] = [];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
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
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
    this.productService.getProducts().subscribe((data) => {
      for (let index = 0; index < data.length; index++) {
        if (data[index].id === this.id) {
          this.product = data[index];
        }
      }
    });

    this.numbers = this.productService.getNumbers();
  }

  addToCart(p: product, quantity: number): void {
    this.productService.addToCart(p, quantity);
    alert(`${p.name} added succsessfuly`);
  }
}

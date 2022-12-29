import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  fullName: string = '';
  total: number = 0;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fullName = this.productService.getName();
    this.total = this.productService.getTotal();
  }
}

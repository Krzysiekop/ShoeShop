import { Component, Output, EventEmitter } from '@angular/core';
import { OrderService } from '../order.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent {

  quantity: number = 0;

  constructor(private orderService: OrderService) {
    this.orderService.currentQuantity.subscribe(quantity => this.quantity = quantity)
  }

  increment() {
    if (this.quantity <= 9) {
      this.quantity++;
    }
  }

  decrement() {
    if (this.quantity >= 1) {
      this.quantity--;
    }
  }

  addToCart() {
    this.orderService.changeQuantity(this.quantity)
  }

}
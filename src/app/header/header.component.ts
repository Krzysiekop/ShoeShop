import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  quantity: number = 0;
  visibleCart: boolean = false;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.currentQuantity.subscribe(quantity => this.quantity = quantity)
  }

  showCart() {
    if (this.visibleCart === false) {
      this.visibleCart = true;
    } else {
      this.visibleCart = false;
    }
  }

  deleteOrder() {
    this.quantity = 0;
    this.orderService.changeQuantity(this.quantity)
  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private quantitySource = new BehaviorSubject<number>(0);
  currentQuantity = this.quantitySource.asObservable();

  constructor() { }

  changeQuantity(quantity: number) {
    this.quantitySource.next(quantity);
  }

}

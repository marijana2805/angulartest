import { Component, OnInit } from '@angular/core';
import {Injectable} from '@angular/core';

@Component({
  selector: 'app-cart-service',
  templateUrl: './cart-service.component.html',
  styleUrls: ['./cart-service.component.css']
})
export class CartServiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
@Injectable({providedIn: 'root'})
export class CartService {
  items = [];

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor() {}

}

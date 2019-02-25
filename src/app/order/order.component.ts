import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { OrderService } from './order.services';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão Crédito', value:'CRED'},
    {label: 'CARTÃO DÉBITO', value:'DEB'}
  ]

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }
  cartItems(): CartItem[]{
    return this.orderService.cartItems()
  }
  increaseQty(item: CartItem){
    this.orderService.increaseQty(item)
  }
  decreaseQty(item: CartItem){
    this.orderService.decreaseQty(item)
  }
  remove(item: CartItem){
    this.orderService.remove(item)
  }
}

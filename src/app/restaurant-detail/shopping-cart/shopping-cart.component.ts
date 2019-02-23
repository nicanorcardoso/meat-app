import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { CartItem } from './cart-item.model';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): any[]{
    return this.shoppingCartService.items;
  }
  item(item: CartItem){
    return this.item.length
  }

  clear(){
    return this.shoppingCartService.clear();
  }

  addItem(item: any){
    this.shoppingCartService.addItem(item)
  }
  
  removeItem(item: any){
    this.shoppingCartService.removeItem(item)
  }

  total(): number{
    return this.shoppingCartService.total();
  }

}

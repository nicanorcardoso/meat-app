import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html',
})
export class RestaurantComponent implements OnInit {

  @Input() restaurant:  Restaurant
 /*Marcar o restaurant com o decorator @Input() vai permitir que outros componentes possam passar
 o restaurante para o meu componente restaurante, e assim ele poderá exibir os dados daquele
 restaurante. Se isso não for feito o componente parente não vai conseguir passar o restaurante 
 para o componente de restaurante, portanto é necessário colocar o @Input() sempre que a gente tiver
 uma proprieade onde possa receber algum dado*/

  constructor() { }

  ngOnInit() {
  }

}

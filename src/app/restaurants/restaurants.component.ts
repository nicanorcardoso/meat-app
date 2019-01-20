import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {/*o metodo ngOnInit é sempre chado uma vez no ciclo de vida do componente
    sempre que o componente entrar na tela, todas a injeções, todas as dependencias tiverem 
    sido atribuidas ao componente o angular irá chamar o metodo ngOnInit, por isso se torna 
    o ponto ideal para fazer a inicialização do componente de serviço abaixo*/
    this.restaurants  = this.restaurantsService.restaurants()
  }

}

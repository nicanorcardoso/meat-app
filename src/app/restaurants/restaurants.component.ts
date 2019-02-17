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

  ngOnInit() {/*o metodo ngOnInit é sempre chamado uma vez no ciclo de vida do componente
    sempre que o componente entrar na tela, todas a injeções, todas as dependencias tiverem 
    sido atribuidas ao componente o angular irá chamar o metodo ngOnInit, por isso se torna 
    o ponto ideal para fazer a inicialização do componente de serviço abaixo*/
    this.restaurantsService.restaurants()
      .subscribe(restaurants => this.restaurants = restaurants)

      /*subscribe recebe a lista de restaurantes, passa o valor atraves do this.restaurants de 
      forma assincrona. O componente é instanciado, as dependencias são atribuidas que é o 7
      restaurantsService. No momento em que é feito o subcribe no OnInitque a requisição http é feita,
      a resposta vai chegar e será mapeada(map) para o json da resposta, ou seja a resposta
      será trocada, recebo a lista de restaurantes(listener)) e alista será jogada na 
      propriedade restaurants*/
  }

}

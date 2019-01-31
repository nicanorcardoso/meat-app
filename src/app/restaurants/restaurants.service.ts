import { Restaurant } from "./restaurant/restaurant.model";
import { ReflectiveInjector, Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { MEAT_API } from "app/app.api";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'; 
import { ErrorHandler } from "app/app.error-handler";

//para uma classe de serviço reseber outro serviço via injeçção de depencia é necessário o @Injectable
@Injectable()
export class RestaurantsService{
    
    

    constructor(private http: Http){}

    restaurants(): Observable <Restaurant[]> {//metodo restaurants retorna um array de restaurantes
        return this.http.get(`${MEAT_API}/restaurants`)
            .map(response => response.json()) //trasnforma o objeto response em um array de restaurantes
            /*
            *o map é necessário por que receberemos um objeto do tipo response que tem outros dados como status
            , mensagem de erro, porem só nos interessa os dados json
             */
            .catch(ErrorHandler.handleError)
    }

    restaurantById(id: string): Observable<Restaurant>{

        return this.http.get(`${MEAT_API}/restaurants/${id}`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }
    
}
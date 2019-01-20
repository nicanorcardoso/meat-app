import {Response} from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/throw';

export class ErrorHandler {
    /*
    Response é um objeto da api angular que representa a resposta, através dele é possivel 
    descobrir o status, o erro ou a url que tentamos acessar*/
    static handleError(error: Response | any){
        let errorMessage: string

        if (error instanceof Response){
            errorMessage = `Erro ${error.status} ao obter a URL ${error.url} - ${error.statusText}`

        }else{
            errorMessage = error.toString()
        }
        console.log(errorMessage)
        return Observable.throw(errorMessage)

    }
}
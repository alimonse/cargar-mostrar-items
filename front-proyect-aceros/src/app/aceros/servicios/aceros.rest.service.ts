import {Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";

import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root',
})

export class AcerosRestService {
  constructor(private readonly _httpClient: HttpClient) {}

  todos(){
    return this._httpClient.get(environment.url+'/items/obtener-todos')
  }

  consultaFiltros(valores: any[]){
    return this._httpClient.post(environment.url+'/items/consulta-filtros',{arreglo: valores})
  }

  obtenerFiltros(campo: string){
    return this._httpClient.get(environment.url+`/items/obtener-filtros?campo=${campo}`)
  }

}

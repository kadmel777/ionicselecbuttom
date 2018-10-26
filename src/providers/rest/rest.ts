import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from "rxjs/operators";


/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }
  /*public getGroups() : Observable<Group[]>  {
    return this.http
      .get('http://localhost:3000/groups')
      .pipe(        
        map (ans => Object.keys(ans).map(k=> new Group(ans[k])))
      )
  }*/
  public getImagens() : Observable<Imagen[]>  {
    return this.http
      .get('http://localhost:3000/imagens')
      .pipe(        
        map (ans => Object.keys(ans).map(k=> new Imagen(ans[k])))
      )
  }

  public getContenidos() : Observable<Contenido[]>  {
    return this.http
      .get('http://localhost:3000/contenidos')
      .pipe(        
        map (ans => Object.keys(ans).map(k=> new Contenido(ans[k])))
      )
  }

}

export class Imagen {
  id: number;
  nombre: string;
  url: string;
  pie: string;
  constructor(values: Object = {}) {
       Object.assign(this, values);
  } 
  
}

export class Contenido {
  id: number;
  titulo: string;
  texto: string;
  qr_id: number;
  constructor(values: Object = {}) {
       Object.assign(this, values);
  }
}

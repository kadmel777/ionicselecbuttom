import { Component } from '@angular/core';
import { NavController, LoadingController  } from 'ionic-angular';
import { RestProvider, Imagen, Contenido  } from '../../providers/rest/rest';

import { ListPage } from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {
  private imagens : Imagen[];
  private contenidos : Contenido[];
    
  constructor(
    public navCtrl: NavController,
    public loadingCtrl:LoadingController,
    public restProvider:RestProvider
    ) {
      this.getImagens();
      this.getContenidos();
      
  }
  

  getImagens() {
    const loader = this.loadingCtrl.create({
      spinner: 'bubbles'      
    })
    loader.present();
    this.restProvider
      .getImagens()
      .subscribe(
        (imagens : Imagen[]) => {
          this.imagens = imagens;
          loader.dismiss();
          console.warn("imagens >> ", this.imagens);
        },
        (err) => {
          loader.dismiss();
          console.error(err);
        }
      )
  }


  getContenidos() {
    const loader = this.loadingCtrl.create({
      spinner: 'bubbles'      
    })
    loader.present();
    this.restProvider
      .getContenidos()
      .subscribe(
        (contenidos : Contenido[]) => {
          this.contenidos = contenidos;
          loader.dismiss();
          console.warn("contenidos >> ", this.contenidos);
        },
        (err) => {
          loader.dismiss();
          console.error(err);
        }
      )
  }

  itemTapped(event, item) {
    this.navCtrl.push(ListPage, {
      g: item
    });
  }

}


import { Component } from '@angular/core';
import { NavController, LoadingController  } from 'ionic-angular';
import { RestProvider, Group  } from '../../providers/rest/rest';

import { ListPage } from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {
  private groups : Group[];
    
  constructor(
    public navCtrl: NavController,
    public loadingCtrl:LoadingController,
    public restProvider:RestProvider
    ) {
      this.getGroups();
      
  }
  

  getGroups() {
    const loader = this.loadingCtrl.create({
      spinner: 'bubbles'      
    })
    loader.present();
    this.restProvider
      .getGroups()
      .subscribe(
        (groups : Group[]) => {
          this.groups = groups;
          loader.dismiss();
          console.warn("groups >> ", this.groups);
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


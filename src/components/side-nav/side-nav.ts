import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the SideNavComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'side-nav',
  templateUrl: 'side-nav.html'
})
export class SideNavComponent {

  text: string;

  constructor(public navCtrl: NavController) {
    console.log('Hello SideNavComponent Component');
    this.text = 'Hello World';
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  number:string;
  message:string;


  constructor(public navCtrl: NavController, public sms:SMS) {

  }


  sendText(){

    this.sms.send(this.number, this.message);

  }

}

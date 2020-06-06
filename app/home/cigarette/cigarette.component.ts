import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cigarette',
  templateUrl: './cigarette.component.html',
  styleUrls: ['./cigarette.component.scss'],
})
export class CigaretteComponent implements OnInit {

  constructor(private alertController:AlertController) { }

  Cigarette=[{brand:"Kings",link:null,price:150},
  {brand:"Lights",link:null,price:150},
  {brand:"Marlboro A",link:null,price:150},
  {brand:"Marlboro B",link:null,price:150},
  {brand:"Marlboro C",link:null,price:150},
  {brand:"Marlboro D",link:null,price:150},
  {brand:"Marlboro E",link:null,price:150},
  {brand:"Marlboro F",link:null,price:150}];

  ngOnInit() { this.presentAlert()}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Smoking is BAD and will KILL you !',
      message: 'By clicking OK, you agree that you are above 21 years',
      buttons: ['OK']
    });

    await alert.present();
  }
  calliterator(n:number){
    return Array(n);
  }
}

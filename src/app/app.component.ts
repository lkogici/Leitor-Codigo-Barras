import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  option: BarcodeScannerOptions;
  encodeText: string = '';
  encodedData: any = {};
  scanedData: any = {};


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public scanner: BarcodeScanner) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  scan() {
    this.option = {
      prompt: "Scan your barcode"
    };

    this.scanner.scan(this.option).then((data) => {
      this.scanedData = data;
    }, (err) => {
      console.log('Error: ', err);
    });
  }

  encode() {
    this.scanner.encode(this.scanner.Encode.TEXT_TYPE, this.encodeText).then((data) => {
      this.encodedData = data;
    }, (err) => {
      console.log('Error: ', err);
    });
  }
}


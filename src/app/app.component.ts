import { Component } from '@angular/core';
import * as firebas from 'firebase'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    var firebaseConfig = {
      apiKey: "AIzaSyDXyCqErhoXRIAIkxaHVcGB2GFNU-Jim9c",
      authDomain: "bookapp-57120.firebaseapp.com",
      databaseURL: "https://bookapp-57120.firebaseio.com",
      projectId: "bookapp-57120",
      storageBucket: "",
      messagingSenderId: "12565373692",
      appId: "1:12565373692:web:786be2f83e1c1bcd"
    };
  firebas.initializeApp(firebaseConfig);
  }
 }

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected title = 'ams';
  societe:string = "IT TEST";

    processEvent(message :any) { 

    alert("Message du fils est : " + message);
  }

}

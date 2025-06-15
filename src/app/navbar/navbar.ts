import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  @Input() dataFromParent: any;
  @Output() eventToSend = new EventEmitter();

  logo: string = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png";

  sendEvent() {
    this.eventToSend.emit("Message du fils vers le pere");
  }

}

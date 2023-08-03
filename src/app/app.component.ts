import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'csfday33pwa';

  isOnline: boolean;

  constructor(){
    this.isOnline = false;
  }

  ngOnInit(): void {
    this.updateOnlineStatus();
    window.addEventListener('online', this.updateOnlineStatus.bind(this));
    window.addEventListener('offline', this.updateOnlineStatus.bind(this));
  }

  private updateOnlineStatus() : void {
    this.isOnline = window.navigator.onLine;
  }

}
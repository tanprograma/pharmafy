import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  time = new Date().toLocaleTimeString();
  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.toggleTime();
    }, 1000);
  }
  toggleTime() {
    this.time = new Date().toLocaleTimeString();
  }
}

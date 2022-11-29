import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Input() title?: string;
  @Input() menutoggled?: any;
  @Output() menutoggledChange = new EventEmitter<any>();
  icon?: any;
  angledownIcon = faAngleDown;
  anglerightIcon = faAngleRight;
  constructor() {}

  ngOnInit(): void {
    this.icon = faAngleRight;
  }
  toggleMenu() {
    this.menutoggled = this.menutoggled == this.title ? '' : this.title;
    this.icon = this.menutoggled ? this.angledownIcon : this.anglerightIcon;
    this.menutoggledChange.emit(this.menutoggled);
  }
}

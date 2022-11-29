import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-snbtn',
  templateUrl: './snbtn.component.html',
  styleUrls: ['./snbtn.component.css'],
})
export class SnbtnComponent implements OnInit {
  @Input() sn?: any;
  constructor() {}

  ngOnInit(): void {}
}

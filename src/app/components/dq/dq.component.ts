import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-dq',
  templateUrl: './dq.component.html',
  styleUrls: ['./dq.component.css'],
})
export class DqComponent implements OnInit {
  @Input() qn?: any;
  constructor() {}

  ngOnInit(): void {}
}

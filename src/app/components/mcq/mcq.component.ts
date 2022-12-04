import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-mcq',
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.css'],
})
export class McqComponent implements OnInit {
  @Input() qn?: any;
  constructor() {}

  ngOnInit(): void {}
}

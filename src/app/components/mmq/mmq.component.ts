import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-mmq',
  templateUrl: './mmq.component.html',
  styleUrls: ['./mmq.component.css'],
})
export class MmqComponent implements OnInit {
  @Input() qn?: any;
  constructor() {}

  ngOnInit(): void {}
}

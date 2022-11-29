import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  @Input() view?: string;
  // @Output() viewChange= new EventEmitter<any>()
  constructor() {}

  ngOnInit(): void {}
}

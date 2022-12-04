import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-tf',
  templateUrl: './tf.component.html',
  styleUrls: ['./tf.component.css'],
})
export class TfComponent implements OnInit {
  @Input() qn?: any;
  constructor() {}

  ngOnInit(): void {}
}

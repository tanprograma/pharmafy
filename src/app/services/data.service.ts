import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  topics: any = [];
  questions: any = [];
  // db: any = [];
  constructor() {}
}

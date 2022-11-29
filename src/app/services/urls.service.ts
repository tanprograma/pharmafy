import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UrlsService {
  topics = 'http://localhost:8000/topics';
  questions = 'http://localhost:8000/questions';
  topik = './assets/db.json';
  constructor() {}
}

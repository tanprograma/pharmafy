import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UrlsService {
  // dev urls
  topics = 'http://localhost:8000/topics';
  questions = 'http://localhost:8000/questions';
  // production urls
  db = 'https://tanprograma.github.io/tandbs/pharmafy.json';
  constructor() {}
}

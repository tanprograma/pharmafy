import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  get(url: string): Observable<any> {
    return this.http.get(url);
  }

  post(url: string, course: any): Observable<any> {
    return this.http.post(url, JSON.stringify(course), httpOptions);
  }
}

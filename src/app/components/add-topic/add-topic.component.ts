import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { DataService } from 'src/app/services/data.service';
import { UrlsService } from 'src/app/services/urls.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.css'],
})
export class AddTopicComponent implements OnInit {
  message = false;
  constructor(
    private http: HttpService,
    private data: DataService,
    private urls: UrlsService
  ) {}

  ngOnInit(): void {}
  onSubmit(f: NgForm): void {
    console.log('submit clicked');
    if (f.value.name == '') return;
    const toAdd = {
      name: f.value.name,
      id: this.data.topics.length + 1,
      questions: [],
    };
    f.reset();
    this.http.post(this.urls.topics, toAdd).subscribe((course) => {
      console.log(course);
      this.data.topics.push(course);
    });
    this.message = !this.message;
  }
  toggleMessage() {
    if (this.message) {
      this.message = !this.message;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { DataService } from 'src/app/services/data.service';
import { UrlsService } from 'src/app/services/urls.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css'],
})
export class AddQuestionsComponent implements OnInit {
  message = false;
  constructor(
    private http: HttpService,
    public data: DataService,
    private urls: UrlsService
  ) {}

  ngOnInit(): void {}
  onSubmit(f: NgForm): void {
    console.log('submit clicked');
    if (f.value.topic == '' || f.value.question == '') return;
    const toAdd = {
      topic: f.value.topic,
      id: this.data.questions.length + 1,
      question: f.value.question,
    };
    f.reset();
    // this.http.post(this.urls.questions, toAdd).subscribe((question) => {
    //   console.log(question);
    //   this.data.questions.push(question);
    // });
    this.message = !this.message;
  }
  toggleMessage() {
    if (this.message) {
      this.message = !this.message;
    }
  }
}

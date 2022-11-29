import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { DataService } from 'src/app/services/data.service';
import { UrlsService } from 'src/app/services/urls.service';
import {
  faAngleRight,
  faAngleDown,
  faAngleLeft,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  myData?: any;
  icon?: any;
  sideIcon?: any;
  questions?: any;
  angledownIcon = faAngleDown;
  anglerightIcon = faAngleRight;
  angleleftIcon = faAngleLeft;
  sidemenu = false;

  menutoggled?: any;
  view?: any;
  constructor(
    private urls: UrlsService,
    private http: HttpService,
    public data: DataService
  ) {}

  ngOnInit(): void {
    this.icon = faAngleRight;
    this.sideIcon = faAngleRight;
    // test code
    this.http.get(this.urls.topics).subscribe((topics) => {
      this.data.topics = topics;
    });
    this.http.get(this.urls.questions).subscribe((questions) => {
      this.data.questions = questions;
    });

    // production code
    // this.http.get(this.urls.topik).subscribe((res) => {
    //   this.data.topiks = res.topics;
    // });
  }

  toggleView(topic: any) {
    this.questions = this.data.questions
      .filter((item: any) => {
        return item.topic == topic;
      })
      .map((item: any, index: any) => {
        item.n = index + 1;
        return item;
      });
    this.view = 'questions';
  }
  toggleForms(topic: any) {
    this.view = topic;
  }
  sideMenuToggled() {
    this.sidemenu = !this.sidemenu;
    this.sideIcon = this.sidemenu ? this.angleleftIcon : this.anglerightIcon;
  }
}

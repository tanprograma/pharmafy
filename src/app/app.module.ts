import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseComponent } from './components/course/course.component';
import { QuestionComponent } from './components/question/question.component';
import { AddTopicComponent } from './components/add-topic/add-topic.component';
import { FormsComponent } from './components/forms/forms.component';
import { AddQuestionsComponent } from './components/add-questions/add-questions.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { SnbtnComponent } from './components/snbtn/snbtn.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CoursesComponent,
    CourseComponent,
    QuestionComponent,
    AddTopicComponent,
    FormsComponent,
    AddQuestionsComponent,
    MenuComponent,
    HeaderComponent,
    SnbtnComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

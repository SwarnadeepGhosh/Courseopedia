import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopicComponent } from './components/topic/topic.component';
import { ErrorComponent } from './components/error/error.component';
import { FormsModule } from '@angular/forms';
import { CourseComponent } from './components/course/course.component';
import { LessonComponent } from './components/lesson/lesson.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicComponent,
    ErrorComponent,
    CourseComponent,
    LessonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './components/course/course.component';
import { ErrorComponent } from './components/error/error.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { TopicComponent } from './components/topic/topic.component';

const routes: Routes = [
  { path: '', redirectTo: '/topics', pathMatch: 'full' },
  { path: 'topics', component: TopicComponent },
  { path: 'topics/:topicId/courses', component: CourseComponent },
  { path: 'topics/:topicId/courses/:courseId/lessons', component: LessonComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

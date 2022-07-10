import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Lesson } from '../models/Lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  constructor(private http: HttpClient) {}

  public getAllLessons( topicId: string, courseId: string): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(`${environment.apiServerUrl}/topics/${topicId}/courses/${courseId}/lessons`);
  }

  public addLesson(topicId: string , courseId: string, lesson: Lesson): Observable<Lesson> {
    return this.http.post<Lesson>(`${environment.apiServerUrl}/topics/${topicId}/courses/${courseId}/lessons`, lesson);
  }

  public updateLesson( topicId: string , courseId: string, lesson: Lesson, lessonId: string): Observable<Lesson> {
    return this.http.put<Lesson>(`${environment.apiServerUrl}/topics/${topicId}/courses/${courseId}/lessons/${lessonId}`, lesson);
  }

  public deleteLesson(topicId: string , courseId: string, lessonId: string): Observable<void> {
    return this.http.delete<void>(`${environment.apiServerUrl}/topics/${topicId}/courses/${courseId}/lessons/${lessonId}`);
  }
}

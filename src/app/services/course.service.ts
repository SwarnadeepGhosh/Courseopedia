import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course } from '../models/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private http: HttpClient) {}

  public getAllCourses( topicId: string): Observable<Course[]> {
    return this.http.get<Course[]>(`${environment.apiServerUrl}/topics/${topicId}/courses`);
  }

  public addCourse(topicId: string, course: Course): Observable<Course> {
    return this.http.post<Course>(`${environment.apiServerUrl}/topics/${topicId}/courses`, course);
  }

  public updateCourse( topicId: string, course: Course, courseId: string): Observable<Course> {
    return this.http.put<Course>(`${environment.apiServerUrl}/topics/${topicId}/courses/${courseId}`, course);
  }

  public deleteCourse(topicId: string, courseId: string): Observable<void> {
    return this.http.delete<void>(`${environment.apiServerUrl}/topics/${topicId}/courses/${courseId}`);
  }
}

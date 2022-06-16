import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Topic } from '../models/Topic';

@Injectable({
  providedIn: 'root',
})
export class TopicService {
  constructor(private http: HttpClient) {}

  public getAllTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(`${environment.apiServerUrl}/topics`);
  }

  public addTopic(topic: Topic): Observable<Topic> {
    return this.http.post<Topic>(`${environment.apiServerUrl}/topics`, topic);
  }

  public updateTopic(topic: Topic, topicId: string): Observable<Topic> {
    return this.http.put<Topic>(`${environment.apiServerUrl}/topics/${topicId}`, topic);
  }

  public deleteTopic(topicId: string): Observable<void> {
    return this.http.delete<void>(`${environment.apiServerUrl}/topics/${topicId}`);
  }
}

import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Topic } from 'src/app/models/Topic';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
})
export class TopicComponent implements OnInit {
  public topics: Topic[] = [];

  constructor(private topicService: TopicService) {}

  ngOnInit(): void {
    this.getTopics();
  }

  public getTopics(): void {
    this.topicService.getAllTopics().subscribe(
      (response: Topic[]) => {
        this.topics = response;
      }, (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }



}

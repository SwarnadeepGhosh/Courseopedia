import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Topic } from 'src/app/models/Topic';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
})
export class TopicComponent implements OnInit {
  public topics: Topic[] = [];
  public updateTopic: Topic;
  public deleteTopic: Topic;

  constructor(private topicService: TopicService, private router: Router, private route : ActivatedRoute) {}

  ngOnInit(): void {
    this.getTopics();
  }

  public getTopics(): void {
    this.topicService.getAllTopics().subscribe(
      (response: Topic[]) => {
        this.topics = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  public onOpenModal(topic: Topic, mode: string): void {
    const container = document.getElementById('main-container');

    // Basically we will create below button through JavaScript
    //<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Launch modal</button>
    const button = document.createElement('button');
    button.type = 'button'; // To change default button type from Submit.
    button.style.display = 'none'; // Hide the button in UI, we will use already created button for Add / delete / update
    button.setAttribute('data-toggle', 'modal');

    // Setting data Target as per mode
    if (mode === 'add') {
      button.setAttribute('data-target', '#addTopicModal');
      console.log('Add called');
    }
    if (mode === 'update') {
      this.updateTopic = topic;
      button.setAttribute('data-target', '#updateTopicModal');
      console.log('Update called');
    }
    if (mode === 'delete') {
      this.deleteTopic = topic;
      button.setAttribute('data-target', '#deleteTopicModal');
      console.log('delete called');
    }

    container?.appendChild(button); // Adding the button to the view, so that it can do its job
    button.click();
  }

  public onAddTopic(addForm: NgForm): void {
    document.getElementById('add-topic-form').click(); // This will close add modal after submit
    this.topicService.addTopic(addForm.value).subscribe(
      (response: Topic) => {
        console.log(response);
        this.getTopics();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onupdateTopic(topic: Topic): void {
    // document.getElementById('update-topic-form').click();
    this.topicService.updateTopic(topic, topic.id).subscribe(
      (response: Topic) => {
        console.log(response);
        this.getTopics();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteTopic(topicId: string): void {
    this.topicService.deleteTopic(topicId).subscribe(
      (response: void) => {
        console.log("Topic Deleted : " + topicId);
        this.getTopics();
      },
      (error: HttpErrorResponse) => { alert(error.message); }
    )
  }

  public searchEmployees(key: string): void {
    console.log(key);
    const results: Topic[] = [];
    for (const topic of this.topics) {
      // .indexOf() returns -1 if not present.
      if (topic.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || topic.id.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || topic.description.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(topic);
      }
    }
    this.topics = results;
    if (results.length === 0 || !key) {
      this.getTopics();
    }
  }

  navigateToCourses(topic: Topic){
    // this.router.navigate(['/topics', topic.id, 'courses']); // Absolute Routing
   this.router.navigate([topic.id, 'courses'], {relativeTo: this.route}); //Relative Routing
  }

}

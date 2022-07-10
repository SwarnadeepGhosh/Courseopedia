import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Lesson } from 'src/app/models/Lesson';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {
  public lessons: Lesson[] = [];
  public updateLesson: Lesson;
  public deleteLesson: Lesson;
  public topicId : string;
  public courseId : string;

  constructor(private lessonService: LessonService, private router: Router, private route : ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.topicId = params.get('topicId')!;
      this.courseId = params.get('courseId')!;
    });
    this.getLessons();
  }

  public getLessons(): void {
    this.lessonService.getAllLessons(this.topicId, this.courseId).subscribe(
      (response: Lesson[]) => {
        this.lessons = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  public onOpenModal(lesson: Lesson, mode: string): void {
    const container = document.getElementById('main-container');

    // Basically we will create below button through JavaScript
    //<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Launch modal</button>
    const button = document.createElement('button');
    button.type = 'button'; // To change default button type from Submit.
    button.style.display = 'none'; // Hide the button in UI, we will use already created button for Add / delete / update
    button.setAttribute('data-toggle', 'modal');

    // Setting data Target as per mode
    if (mode === 'add') {
      button.setAttribute('data-target', '#addLessonModal');
      console.log('Add called');
    }
    if (mode === 'update') {
      this.updateLesson = lesson;
      button.setAttribute('data-target', '#updateLessonModal');
      console.log('Update called');
    }
    if (mode === 'delete') {
      this.deleteLesson = lesson;
      button.setAttribute('data-target', '#deleteLessonModal');
      console.log('delete called');
    }

    container?.appendChild(button); // Adding the button to the view, so that it can do its job
    button.click();
  }

  public onAddLesson(addForm: NgForm): void {
    document.getElementById('add-lesson-form').click(); // This will close add modal after submit
    this.lessonService.addLesson(this.topicId, this.courseId, addForm.value).subscribe(
      (response: Lesson) => {
        console.log(response);
        this.getLessons();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onupdateLesson(lesson: Lesson): void {
    // document.getElementById('update-lesson-form').click();
    this.lessonService.updateLesson(this.topicId, this.courseId, lesson, lesson.id).subscribe(
      (response: Lesson) => {
        console.log(response);
        this.getLessons();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteLesson(lessonId: string): void {
    this.lessonService.deleteLesson(this.topicId, this.courseId, lessonId).subscribe(
      (response: void) => {
        console.log("Lesson Deleted : " + lessonId);
        this.getLessons();
      },
      (error: HttpErrorResponse) => { alert(error.message); }
    )
  }

  // navigateToLessons(lesson: Lesson){
  //   // this.router.navigate(['/topics', topic.id, 'lessons']); // Absolute Routing
  //   this.router.navigate([lesson.id, 'lessons'], {relativeTo: this.route}); //Relative Routing
  // }


}

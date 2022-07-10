import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Course } from 'src/app/models/Course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  public courses: Course[] = [];
  public updateCourse: Course;
  public deleteCourse: Course;
  public topicId : string;

  constructor(private courseService: CourseService, private router: Router, private route : ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.topicId = params.get('topicId')!;
    });
    this.getCourses();
  }

  public getCourses(): void {
    this.courseService.getAllCourses(this.topicId).subscribe(
      (response: Course[]) => {
        this.courses = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  public onOpenModal(course: Course, mode: string): void {
    const container = document.getElementById('main-container');

    // Basically we will create below button through JavaScript
    //<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Launch modal</button>
    const button = document.createElement('button');
    button.type = 'button'; // To change default button type from Submit.
    button.style.display = 'none'; // Hide the button in UI, we will use already created button for Add / delete / update
    button.setAttribute('data-toggle', 'modal');

    // Setting data Target as per mode
    if (mode === 'add') {
      button.setAttribute('data-target', '#addCourseModal');
      console.log('Add called');
    }
    if (mode === 'update') {
      this.updateCourse = course;
      button.setAttribute('data-target', '#updateCourseModal');
      console.log('Update called');
    }
    if (mode === 'delete') {
      this.deleteCourse = course;
      button.setAttribute('data-target', '#deleteCourseModal');
      console.log('delete called');
    }

    container?.appendChild(button); // Adding the button to the view, so that it can do its job
    button.click();
  }

  public onAddCourse(addForm: NgForm): void {
    document.getElementById('add-course-form').click(); // This will close add modal after submit
    this.courseService.addCourse(this.topicId, addForm.value).subscribe(
      (response: Course) => {
        console.log(response);
        this.getCourses();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onupdateCourse(course: Course): void {
    // document.getElementById('update-course-form').click();
    this.courseService.updateCourse(this.topicId, course, course.id).subscribe(
      (response: Course) => {
        console.log(response);
        this.getCourses();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteCourse(courseId: string): void {
    this.courseService.deleteCourse(this.topicId, courseId).subscribe(
      (response: void) => {
        console.log("Course Deleted : " + courseId);
        this.getCourses();
      },
      (error: HttpErrorResponse) => { alert(error.message); }
    )
  }

  navigateToLessons(course: Course){
    // this.router.navigate(['/topics', topic.id, 'courses']); // Absolute Routing
    this.router.navigate([course.id, 'lessons'], {relativeTo: this.route}); //Relative Routing
  }

}

# CourseApi Frontend StepByStep Tutorial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.



## Setup 

```sh
$ ng new TodoList
$ cd Todolist
$ npm install bootstrap
$ npm install jquery
-- Downloaded versions: "bootstrap": "^4.6.1", "jquery": "^3.6.0",

We will use 
```

We will use [Bootdey - bs4 contact cards](https://www.bootdey.com/snippets/view/bs4-contact-cards) to design our frontend.



Configure `angular.json` to activate bootstrap and jquery

```json
"architect": {
    "build": {
        "builder": "@angular-devkit/build-angular:browser",
        "options": {
            "outputPath": "dist/course-api-ui",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "tsconfig.app.json",
            "assets": [
                "src/favicon.ico",
                "src/assets"
            ],
            "styles": [
                "src/styles.css",
                "./node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
            "scripts": [
                "./node_modules/jquery/dist/jquery.min.js",
                "./node_modules/bootstrap/dist/js/bootstrap.js"
            ]
        },
```



### Setting up Environments

***environment.ts***

```typescript
export const environment = {
  production: false,
  apiServerUrl : 'http://localhost:8080' // baseUrl is the URL for backend
};
```

***environment.prod.ts***

```typescript
export const environment = {
  production: false,
  apiServerUrl : 'https://courseapi-spring-boot.herokuapp.com' // apiServerUrl is the URL for backend
};
```



Adding `HttpClientModule` to ***app.module.ts***, so that it can fetch data from backend.

```typescript
import { HttpClientModule } from '@angular/common/http'
...
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
...
```

### Routing Module

***app-routing.module.ts*** - Used to fetch data from `TopicService` and send the data to HTML.

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopicComponent } from './components/topic/topic.component';

const routes: Routes = [
  { path: 'topics', component: TopicComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```





## Services

- Generate command : `ng g s services/Topic`

***topic.service.ts*** - To Extract **Topics** data from backend 

```typescript
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
```





## Models

***Topic.ts*** - Topic Interface

```typescript
export interface Topic{
    id: string;
    name: string;
    description: string;
}
```





## Components

### Navbar - Footer

***app.component.html***

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" routerLink="/"><i class="fa fa-book"></i> CourseAPI Fullstack</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" routerLink="/topics">All Topics <span class="sr-only">(current)</span></a>
        </li>
        <form class="form-inline my-2 my-lg-0">
          <button class="btn btn-outline-warning my-2 my-sm-0" type="submit">Add Topic</button>
        </form>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search Item..." aria-label="Search">
      </form>
    </div>
</nav>

<div class="my-3">
    <router-outlet></router-outlet>
</div>

<footer class="footer text-light">
  <div class="footer-container align-middle text-center">
      <i>Made with <i class="fa fa-heart"></i> by <a class="text-light" href="https://swarnadeepghosh.github.io/">Swarnadeep</a></i>
  </div>
</footer>
```

***app.component.css***

```css
.footer{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    background-color: #000000;
}
.footer-container{
    padding: 8px;
}
```





### Topic Component

- Generate command : `ng g c components/Topic`

- Open [Bootdey - bs4 contact cards](https://www.bootdey.com/snippets/view/bs4-contact-cards) and copy HTML and CSS in appropriate place.

- ***topic.component.html*** - Copy HTML from Bootdey to here.

  ```html
  <!-- <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"> -->
  <div class="container">
      <div class="row">
          <div *ngFor="let topic of topics" class="col-md-6 col-xl-3">
              <div class="card m-b-30">
                  <div class="card-body row">
                      <div class="col-6">
                          <a href=""><img src="https://springframework.guru/wp-content/uploads/2015/02/spring-framework-project-logo.png" alt="" class="img-fluid rounded-circle w-60"></a>
                      </div>
                      <div class="col-6 card-title align-self-center mb-0">
                          <h5>{{topic.name}}</h5>
                          <!-- <p class="m-0">ID : {{topic.id}}</p> -->
                      </div>
                  </div>
                  <ul class="list-group list-group-flush">
                      <!-- <li class="list-group-item"><i class="fa fa-envelope float-right"></i>Email : <a href="#">PaulGoyette@gmail.com</a></li> -->
                      <li class="list-group-item"><i class="fa fa-user float-right"></i>ID : <strong>{{topic.id}}</strong></li>
                      <li class="list-group-item"><i class="fa fa-code float-right"></i>{{topic.description}}</li>
                  </ul>
                  <div class="card-body">
                      <div class="float-right btn-group btn-group-sm">
                          <a href="#" class="btn mx-2 btn-primary tooltips" data-placement="top" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-pencil"></i> </a>
                          <a href="#" class="btn btn-danger tooltips" data-placement="top" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-times"></i></a>
                      </div>
                      <ul class="social-links list-inline mb-0">
                          <button type="button" class="btn btn-outline-success list-inline-item">Courses <i class="fa fa-hand-o-right"></i></button>
                          <!-- <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="" data-original-title="Facebook"><i class="fa fa-facebook-f"></i></a></li>
                      </ul>
                  </div>
              </div>
          </div>
  
      </div>
  </div>
  ```



- ***styles.css*** - Copy CSS from Bootdey to here.

  ```css
  /* You can add global styles to this file, and also import other style files */
  /* @import url('https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css'); */
  @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css');
  
  body{
      margin-top:20px;
      background: #ebebeb;
      background-color: #d1d1d1;
  }
  .card {
      border: none;
      -webkit-box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
      box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
      margin-bottom: 30px;
  }
  .w-60 {
      width: 60px;
  }
  h1, h2, h3, h4, h5, h6 {
      margin: 0 0 10px;
      font-weight: 600;
  }
  .social-links li a {
      -webkit-border-radius: 50%;
      background-color: rgba(89,206,181,.85);
      border-radius: 50%;
      color: #fff;
      display: inline-block;
      height: 30px;
      line-height: 30px;
      text-align: center;
      width: 30px;
      font-size: 12px;
  }
  a {
      color: #707070;
  }
  ```



- ***topic.component.ts*** - Used to fetch data from `TopicService` and send the data to HTML.

  ```typescript
  import { HttpErrorResponse } from '@angular/common/http';
  import { Topic } from 'src/app/models/Topic';
  import { TopicService } from 'src/app/services/topic.service';
  ...
  export class TopicComponent implements OnInit {
    public topics: Topic[] = [];
  
    constructor(private topicService: TopicService) {}
  
    ngOnInit(): void {
      this.getTopics();
    }
  
    public getTopics(): void {
      this.topicService.getAllTopics().subscribe(
        (response: Topic[]) => { this.topics = response;  }, 
        (error: HttpErrorResponse) => { console.log(error.message); }
      );
    }
  }
  ```

  

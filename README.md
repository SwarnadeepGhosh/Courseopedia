# CourseApi Fullstack Application

[Live Link](https://courseapi.vercel.app/)

### Demo Recording

![courseapi-video](./media/courseapi-video.gif)


### Backend Intro

Here I have designed a production grade CourseAPI complete CRUD backend using Spring Boot, JPA, my own PostgreSQL Database instance and hosted it on Heroku.

Backend Code : https://github.com/SwarnadeepGhosh/CourseApi-UI

### FrontEnd Intro

Here I have designed a Frontend application for CourseAPI Backend using Angular and hosted it on Vercel.

Frontend Code : https://github.com/SwarnadeepGhosh/CourseAPI-Spring-Starter



## Features of UI

- [x]  CREATE or ADD a Topic / Course / Lesson
- [x] READ all items (Topic / Course / Lesson)
- [x] UPDATE a specific item (Topic / Course / Lesson)
- [x] DELETE a specific item (Topic / Course / Lesson)



### APIs I have built

Here we have 3 Controllers

- Topic APIs
- Course APIs - A topic may consists of many courses
- Lesson APIs - A course may consists of many lessons



### Simple Example to understand

- Lets say Java as a Topic.
- Java has many courses like Java 8 , Java Collections and so on.
- Java 8 has many lessons like Lambda, Functional Interface etc.



## Topics I used 

### Springboot Topics 

- Spring Boot CRUD (Create, Read, Update, Delete) using Model, Service, Controller and Repository
- Spring Data JPA & Hibernate

- Hibernate associations and mappings

- Postgres Database

- Actuator Monitoring

- Logging by SLF4j, Caching by Hazlecast , Springfox Swagger 

- Hosting in [Heroku](https://www.heroku.com/)

- CORS Configuration



### Angular Topics 

- Structural Directives, Event Binding, Interpolation,
- Dependency Injection, Pipes, Angular Forms

- Observables and Http Error handling 

- Routing, Route Parameters, Activated Route, Wildcard and Redirecting Routes

- Hosting in [Vercel](https://vercel.com)


### Auto Generated Documentation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
- Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

- Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
- Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
- Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
- To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

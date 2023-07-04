# Courseopedia Fullstack Application

Here I have designed a fullstack application for CourseAPI using Angular and hosted it on Vercel. For backend, I have designed a production grade Courseopedia complete CRUD backend using Spring Boot, JPA, my own PostgreSQL Database instance and hosted it on Azure.

**[Live Link](https://courseapi.vercel.app)** 

**[Backend url - Deployed on Azure](https://courseapi-backend.azurewebsites.net/)** 

![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white) ![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white) ![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![CockroachLabs](https://img.shields.io/badge/Cockroach%20Labs-6933FF?style=for-the-badge&logo=Cockroach%20Labs&logoColor=white) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white) ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white) ![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

<img src="https://cdn-icons-png.flaticon.com/512/4413/4413569.png" alt="release1.0" style="zoom:40%;" />


### Demo Recording

![courseapi-video](./media/courseapi-video.gif)


### Backend Intro

Backend Code : https://github.com/SwarnadeepGhosh/Courseopedia

### FrontEnd Intro

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

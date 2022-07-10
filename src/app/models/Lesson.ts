import { Course } from "./Course";

export interface Lesson{
    id: string;
    name: string;
    description: string;
    course: Course;
}
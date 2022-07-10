import { Topic } from "./Topic";

export interface Course{
    id: string;
    name: string;
    description: string;
    topic: Topic;
}
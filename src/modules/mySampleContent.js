import Task from "./task"
import Project from "./project";

export const sampleTasks = [
    Task("Leg Day", 1, "One must never skip leg day", null, null, "High"),
    Task("Push Day", 2, "Plates for the Dates", null, null, "Medium"),
    Task("Pull Day", 3, "Curls for the gurls", null, null, "High"),
    Task("Watch Top Gun", 4, "New one's pretty good they say", null, null, "Low"),
    Task("Finish this project", 5, "Gotta get it done eventually", null, null, "High"),
    Task("Improve Git Knowledge", 6, "Git is very helpful for programmers to know", null, null, "Medium")
    ];

const codingProject = Project("Coding", new Array(sampleTasks[4], sampleTasks[5]));
const fitnessProject = Project("Fitness", new Array(sampleTasks[0], sampleTasks[1], sampleTasks[2]));

export const sampleProjects = [
    codingProject, fitnessProject    
    ];


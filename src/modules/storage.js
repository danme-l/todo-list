import Task from './task';
import Project from './project';

const Storage = (() => {
    let taskList = [];
    let projectList = [];
    
    // adds task by taskID to local storage
    const addTask = (newTask) => {
        taskList.push(newTask);
        // localStorage.setItem(newTask.getTaskID, JSON.stringify(newTask));
    }

    const addTestTask = () => {
        let testTask = Task(
            "Do Legs",
            2,
            "One must never skip leg day",
            null, null,
            "Medium"
        );

        console.log(taskList);
        taskList.push(testTask);
    }

    const getTaskList = () => taskList;
    const setTaskList = (newList) => {
        taskList = [...newList];
    }

    const getTaskByID = (id) => {
        // retrieves a task from the list by its ID 
        return taskList.filter((t) => t.getTaskID() === id)
    } 
    
    const addProject = (newProject) => {
        projectList.push(newProject);
    }

    const getProjectList = () => projectList;

    return {
        addTask, getTaskList, setTaskList, addTestTask, getTaskByID,
        addProject, getProjectList
    };

})();

export default Storage;
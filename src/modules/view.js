import Task from './task';
import Project from './project';
import Storage from './storage';
import sampleTasks from './mySampleContent';

const navBar = document.getElementById('navbar');
const mainContent = document.getElementById('main-content');
const taskContainer = document.getElementById('task-container');
const mainSectionTitle = document.getElementById('main-content-header');
const sampProjBtn = document.getElementById('samp-projects-btn');

const View = (() => {
    // switch between the active project displayed in the main section
    let activeProject = 'Home';

    const init = () => {
        initialPopulateNav();
        initialPopulateMain();
    }

    const initialPopulateNav = () => {
        // home and high priority
        const homeSection = document.createElement('div');
        homeSection.classList.add('nav-section', 'nav-project');
        homeSection.setAttribute('value', 'home');
        homeSection.addEventListener("click", (e) => {
            console.log(e.target.attributes[1].value);
            setCurrentProject(e.target.attributes[1].value);
        });
        homeSection.innerHTML = "Home";

        const highPriority = document.createElement('div');
        highPriority.classList.add('nav-section', 'nav-project');
        highPriority.setAttribute('value', 'high-priority-projects');
        highPriority.addEventListener("click", (e) => {
            console.log(e.target.attributes[1].value);
            setCurrentProject(e.target.attributes[1].value);
        });
        highPriority.innerHTML = "High Priority";

        // TODO each nav-project needs an onclick() that will set the current project

        const projectHead = document.createElement('h2');
        projectHead.classList.add('nav-section');
        projectHead.innerHTML = "Projects";

        // TODO populateProjectsSection();

        const addProjectBtn = document.createElement('button');
        addProjectBtn.classList.add('add-btn');
        addProjectBtn.innerHTML = '+ New Project';

        const addTaskBtn = document.createElement('button');
        addTaskBtn.classList.add('add-btn');
        addTaskBtn.addEventListener("click", (e) => {
            // this adds the test task for now and re-calls the display button
            // TODO this should bring up a task adding modal
            console.log(e.target)
            Storage.addTestTask();
            displayTasks();
        });
        addTaskBtn.innerHTML = '+ New Task';

        navBar.append(homeSection, highPriority, projectHead, addProjectBtn, addTaskBtn);
    }

    const initialPopulateMain = () => {
        // populate the main section with the tasks from the current project
        const firstTask = Task(
            'Add projects & tasks',
            1, 
            'To make any use out of a to-do list app, I should probably add something to it.',
            null, null, // dueDate and project
            "High"); 

        Storage.addTask(firstTask);

        Storage.getTaskList().forEach((t) => {
            taskContainer.append(createTaskNode(t));
        });
    };

    const loadSamples = () => {
        // loads some sample projects
        Storage.setTaskList(sampleTasks);
        console.log(sampleTasks);
        displayTasks();
    }
    sampProjBtn.addEventListener('click', loadSamples);

    const createTaskNode = (taskToDisplay) => {
        // return a formatted task html node that can be added to the dom
        let thisTask = document.createElement('div');
        thisTask.classList.add('task');

        let taskNameDiv = document.createElement('div');
        taskNameDiv.innerHTML = taskToDisplay.getTitle(); 

        let taskPriorityDiv = document.createElement('div');
        taskPriorityDiv.innerHTML = taskToDisplay.getPriority();
        taskPriorityDiv.classList.add(`priority-${taskToDisplay.getPriority()}`);

        thisTask.append(taskNameDiv, taskPriorityDiv);

        return thisTask;
    }

    // sets the project that is displayed in the main section
    // move to a controller?
    const setCurrentProject = (newProject) => {
        if (newProject === 'home') {
            mainSectionTitle.innerHTML = 'Home';
            displayTasks();
        } else if (newProject === 'high-priority-projects') {
            mainSectionTitle.innerHTML = 'High Priority';
            // display only high priority projects
            Storage.getTaskList().filter()
            displayTasks();
        } else {
            taskContainer.innerHTML = "";

            // for now this is a string but will eventually be a project
            mainSectionTitle.innerHTML = newProject;
            mainContent.append(mainSectionTitle);

            // TODO retrive the project list and load the tasks
            // newProject.getTasks()

            // TODO adds the add task button to the bottom of the section
            // appendAddTaskButton();
        }

    }

    const displayTasks = () => {
        mainSectionTitle.innerHTML = activeProject;
        taskContainer.innerHTML = '';
        Storage.getTaskList().forEach((t) => {
            taskContainer.append(createTaskNode(t));
        });
    };



    return { init, }
})();

export default View;
import Task from './task';
import Project from './project';
import Storage from './storage';
import setUpModals from './modals';
import { sampleTasks, sampleProjects } from './mySampleContent';

const navBar = document.getElementById('navbar');
const taskContainer = document.getElementById('task-container');
const mainSectionTitle = document.getElementById('main-content-header');
const sampProjBtn = document.getElementById('samp-projects-btn');
const taskPreviewBox = document.getElementById('task-preview-box');

const View = (() => {
    // switch between the active project displayed in the main section
    let activeProject = 'Home';
    mainSectionTitle.innerHTML = activeProject;

    const init = () => {
        initialPopulateNav();
        initialPopulateMain();
        setUpModals();
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
            setCurrentProject(e.target.attributes[1].value);
        });
        highPriority.innerHTML = "High Priority";

        const projectHead = document.createElement('h2');
        projectHead.classList.add('nav-section');
        projectHead.innerHTML = "Projects";

        const projectBox = document.createElement('div');
        projectBox.setAttribute('id','project-box');

        const addProjectBtn = document.createElement('button');
        addProjectBtn.classList.add('add-btn');
        addProjectBtn.setAttribute('id', 'new-project-btn');
        addProjectBtn.innerHTML = '+ New Project';

        const addTaskBtn = document.createElement('button');
        addTaskBtn.classList.add('add-btn');
        addTaskBtn.setAttribute('id','new-task-btn'); // functionality in modals.js
        addTaskBtn.innerHTML = '+ New Task';

        navBar.append(homeSection, highPriority, projectHead, projectBox, addProjectBtn, addTaskBtn);
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
        Storage.setProjectList(sampleProjects);
        displayTasks();
        displayProjects(Storage.getProjectList());
    }
    sampProjBtn.addEventListener('click', loadSamples);

    const createTaskNode = (taskToDisplay) => {
        // return a formatted task html node that can be added to the dom
        let thisTask = document.createElement('div');
        thisTask.classList.add('task');
        thisTask.value = taskToDisplay.getTaskID();

        // needs to call a task from the list instead
        thisTask.addEventListener('mouseenter', () => showTaskPreview(Storage.getTaskByID(thisTask.value)));
        thisTask.addEventListener('mouseleave', () => removeTaskPreview(Storage.getTaskByID(thisTask.value)));


        let taskNameDiv = document.createElement('div');
        taskNameDiv.innerHTML = taskToDisplay.getTitle(); 

        let taskPriorityDiv = document.createElement('div');
        taskPriorityDiv.innerHTML = taskToDisplay.getPriority();
        taskPriorityDiv.classList.add(`priority-${taskToDisplay.getPriority()}`);

        thisTask.append(taskNameDiv, taskPriorityDiv);

        return thisTask;
    }

    const showTaskPreview = (taskToPreview) => {
        taskPreviewBox.innerHTML = '';
        taskPreviewBox.innerHTML = 
        `
        <h3>${taskToPreview[0].getTitle()}</h3>
        <p>${taskToPreview[0].getDesc()}</p>
        <p class='priority-${taskToPreview[0].getPriority()}'>Priority: ${taskToPreview[0].getPriority()}</p>
        `

        taskPreviewBox.classList.replace('hidden','visible');
    };

    const removeTaskPreview = (taskToPreview) => {
        taskPreviewBox.classList.replace('visible', 'hidden');
        // taskPreviewBox.classList.replace(`priority-${taskToPreview[0].getPriority()}`,'na');
    };

    // sets the project that is displayed in the main section
    // move to a controller?
    const setCurrentProject = (newProject) => {
        if (newProject === 'home') {
            activeProject = 'Home';
            displayTasks();
        } else if (newProject === 'high-priority-projects') {
            activeProject = "High Priority";
            mainSectionTitle.innerHTML = 'High Priority';
            // display only high priority projects
            taskContainer.innerHTML = '';
            Storage.getTaskList().filter((p) => p.getPriority() === 'High').forEach((t) => {
                taskContainer.append(createTaskNode(t));
            });;
            console.log(Storage.getTaskList().filter((p) => p.getPriority() === 'High'))
            // displayTasks();
        } else {
            // clear task box
            taskContainer.innerHTML = "";
            // sets the project name as the header
            mainSectionTitle.innerHTML = newProject.getName();
            // add each task from that project to the task container
            newProject.getTasks().forEach((t) => {
                taskContainer.append(createTaskNode(t));
            });
        }

    }

    // displays All tasks
    const displayTasks = () => {
        mainSectionTitle.innerHTML = activeProject;
        taskContainer.innerHTML = '';
        Storage.getTaskList().forEach((t) => {
            taskContainer.append(createTaskNode(t));
        });
    };


    const displayProjects = (projectList) => { 
        const projectBox = document.getElementById('project-box');
        projectBox.innerHTML = '';

        projectList.forEach((p) => {
            let projectLabel = document.createElement('div');
            projectLabel.classList.add('nav-section', 'nav-project');
            projectLabel.innerHTML = p.getName();
            projectLabel.addEventListener('click', (e) => {
                setCurrentProject(p);
            });
            projectBox.append(projectLabel);
        });
    }

    return { init, displayTasks, displayProjects}
})();

export default View;
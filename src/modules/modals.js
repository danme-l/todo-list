import Task from "./task";
import Project from "./project";
import View from "./view";
import Storage from "./storage";


// set up both modals 
export default function setUpModals() {
    // NEW TASK modal
    const newTaskModal = document.getElementById('add-task-modal-wrapper');
    const newTaskBtn = document.getElementById('new-task-btn');
    const taskCloseBtn = document.getElementsByClassName('modal-close')[0];
    const taskSubmitBtn = document.getElementById('submit-task');
    let projectSelect = document.getElementById('project-select');

    newTaskBtn.onclick = function() {
        newTaskModal.style.display = 'block';
        // set up the project select menu
        projectSelect.innerHTML = '';
        Storage.getProjectList().forEach((p) => {
            let projectOption = document.createElement('option');
            projectOption.innerHTML = p.getName();
            projectSelect.appendChild(projectOption);
        });
    };

    function closeTaskModal() {
        newTaskModal.style.display = 'none';
    }

    taskCloseBtn.onclick = closeTaskModal;

    taskSubmitBtn.onclick = function() {
        // get info from the modal
        let newTaskTitle = document.getElementById('new-task-title').value;
        let newTaskDesc = document.getElementById('new-task-desc').value;
        let prioritySelect = document.getElementById('new-task-priority');
        let newTaskPriority = prioritySelect.options[prioritySelect.selectedIndex].text;
        

        // create the new task
        let newTask = Task(
            newTaskTitle, 
            Storage.getTaskList().length + 1, // id is the index on the task list
            newTaskDesc, 
            null, null, // TODO due date & project 
            newTaskPriority);

        // assiging the new task to the project
        let newTaskProjectName = projectSelect.options[projectSelect.selectedIndex].text; // get the name from the drop down
        let newTaskProjectIndex = Storage.getProjectList().findIndex((p) => p.getName() === newTaskProjectName); // gets the index of that project from the project list in storage
        Storage.getProjectList()[newTaskProjectIndex].appendTask(newTask); // append the new task to that project's task list

        Storage.addTask(newTask);
        View.displayTasks(); // TODO this doesn't seem like the proper way to do this. Future Controller module?
        closeTaskModal();
    };

    // -------------------------------------------------------------------------------------------------------------- //

    // NEW PROJECT modal
    const newProjectModal = document.getElementById('add-project-modal-wrapper');
    const newProjectBtn = document.getElementById('new-project-btn');
    const projectCloseBtn = document.getElementsByClassName('modal-close')[1];
    const projectSubmitBtn = document.getElementById('submit-project');

    newProjectBtn.onclick = function() {
        newProjectModal.style.display = 'block';
    };

    function closeProjectModal() {
        newProjectModal.style.display = 'none';
    }

    projectCloseBtn.onclick = closeProjectModal;

    projectSubmitBtn.onclick = function() {
        let newProjectName = document.getElementById('new-project-title').value;

        let newProject = Project(newProjectName);
        Storage.addProject(newProject);
        View.displayProjects(Storage.getProjectList());
        closeProjectModal();
    }

}
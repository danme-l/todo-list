/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/modals.js":
/*!*******************************!*\
  !*** ./src/modules/modals.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setUpModals)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ "./src/modules/view.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");






// set up both modals 
function setUpModals() {
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
        _storage__WEBPACK_IMPORTED_MODULE_3__["default"].getProjectList().forEach((p) => {
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
        let newTask = (0,_task__WEBPACK_IMPORTED_MODULE_0__["default"])(
            newTaskTitle, 
            _storage__WEBPACK_IMPORTED_MODULE_3__["default"].getTaskList().length + 1, // id is the index on the task list
            newTaskDesc, 
            null, null, // TODO due date & project 
            newTaskPriority);

        // assiging the new task to the project
        let newTaskProjectName = projectSelect.options[projectSelect.selectedIndex].text; // get the name from the drop down
        let newTaskProjectIndex = _storage__WEBPACK_IMPORTED_MODULE_3__["default"].getProjectList().findIndex((p) => p.getName() === newTaskProjectName); // gets the index of that project from the project list in storage
        _storage__WEBPACK_IMPORTED_MODULE_3__["default"].getProjectList()[newTaskProjectIndex].appendTask(newTask); // append the new task to that project's task list

        _storage__WEBPACK_IMPORTED_MODULE_3__["default"].addTask(newTask);
        _view__WEBPACK_IMPORTED_MODULE_2__["default"].displayTasks(); // TODO this doesn't seem like the proper way to do this. Future Controller module?
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

        let newProject = (0,_project__WEBPACK_IMPORTED_MODULE_1__["default"])(newProjectName);
        _storage__WEBPACK_IMPORTED_MODULE_3__["default"].addProject(newProject);
        _view__WEBPACK_IMPORTED_MODULE_2__["default"].displayProjects(_storage__WEBPACK_IMPORTED_MODULE_3__["default"].getProjectList());
        closeProjectModal();
    }

}

/***/ }),

/***/ "./src/modules/mySampleContent.js":
/*!****************************************!*\
  !*** ./src/modules/mySampleContent.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sampleProjects": () => (/* binding */ sampleProjects),
/* harmony export */   "sampleTasks": () => (/* binding */ sampleTasks)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");



const sampleTasks = [
    (0,_task__WEBPACK_IMPORTED_MODULE_0__["default"])("Leg Day", 1, "One must never skip leg day", null, null, "High"),
    (0,_task__WEBPACK_IMPORTED_MODULE_0__["default"])("Push Day", 2, "Plates for the Dates", null, null, "Medium"),
    (0,_task__WEBPACK_IMPORTED_MODULE_0__["default"])("Pull Day", 3, "Curls for the gurls", null, null, "High"),
    (0,_task__WEBPACK_IMPORTED_MODULE_0__["default"])("Watch Top Gun", 4, "New one's pretty good they say", null, null, "Low"),
    (0,_task__WEBPACK_IMPORTED_MODULE_0__["default"])("Finish this project", 5, "Gotta get it done eventually", null, null, "High"),
    (0,_task__WEBPACK_IMPORTED_MODULE_0__["default"])("Improve Git Knowledge", 6, "Git is very helpful for programmers to know", null, null, "Medium")
    ];

const codingProject = (0,_project__WEBPACK_IMPORTED_MODULE_1__["default"])("Coding", new Array(sampleTasks[4], sampleTasks[5]));
const fitnessProject = (0,_project__WEBPACK_IMPORTED_MODULE_1__["default"])("Fitness", new Array(sampleTasks[0], sampleTasks[1], sampleTasks[2]));

const sampleProjects = [
    codingProject, fitnessProject    
    ];



/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Project = (name, tasks = []) => {    
    const getName = () => name;
    const getTasks = () => tasks;

    const appendTask = (task) => {
        tasks.push(task);
    }

    return {name, tasks, getName, getTasks, appendTask}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");



const Storage = (() => {
    let taskList = [];
    let projectList = [];
    
    // adds task by taskID to local storage
    const addTask = (newTask) => {
        taskList.push(newTask);
        // localStorage.setItem(newTask.getTaskID, JSON.stringify(newTask));
    }

    const addTestTask = () => {
        let testTask = (0,_task__WEBPACK_IMPORTED_MODULE_0__["default"])(
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

    const setProjectList = (newPList) => {
        projectList = [...newPList];
    }

    return {
        addTask, getTaskList, setTaskList, addTestTask, getTaskByID,
        addProject, getProjectList, setProjectList,
    };

})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Storage);

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Task = (title, taskID, desc, dueDate, project, priority) => {
    const getTitle = () => title;
    const getDesc = () => desc;
    const getDueDate = () => dueDate;
    const getTaskID = () => taskID;
    const getPriority = () => priority;
    const getProject = () => project;

    const getTask = () => {
        return [title, desc, dueDate, project, priority];
    };

    const setProject = (project) => {
        project = project;
    };
     
    return { title, priority, getTitle, getDesc, getDueDate, getPriority, getTaskID, getTask, getProject, setProject }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

/***/ }),

/***/ "./src/modules/view.js":
/*!*****************************!*\
  !*** ./src/modules/view.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modals */ "./src/modules/modals.js");
/* harmony import */ var _mySampleContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mySampleContent */ "./src/modules/mySampleContent.js");






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
        (0,_modals__WEBPACK_IMPORTED_MODULE_3__["default"])();
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
        const firstTask = (0,_task__WEBPACK_IMPORTED_MODULE_0__["default"])(
            'Add projects & tasks',
            1, 
            'To make any use out of a to-do list app, I should probably add something to it.',
            null, null, // dueDate and project
            "High"); 

        _storage__WEBPACK_IMPORTED_MODULE_2__["default"].addTask(firstTask);

        _storage__WEBPACK_IMPORTED_MODULE_2__["default"].getTaskList().forEach((t) => {
            taskContainer.append(createTaskNode(t));
        });
    };

    const loadSamples = () => {
        // loads some sample projects
        _storage__WEBPACK_IMPORTED_MODULE_2__["default"].setTaskList(_mySampleContent__WEBPACK_IMPORTED_MODULE_4__.sampleTasks);
        _storage__WEBPACK_IMPORTED_MODULE_2__["default"].setProjectList(_mySampleContent__WEBPACK_IMPORTED_MODULE_4__.sampleProjects);
        displayTasks();
        displayProjects(_storage__WEBPACK_IMPORTED_MODULE_2__["default"].getProjectList());
    }
    sampProjBtn.addEventListener('click', loadSamples);

    const createTaskNode = (taskToDisplay) => {
        // return a formatted task html node that can be added to the dom
        let thisTask = document.createElement('div');
        thisTask.classList.add('task');
        thisTask.value = taskToDisplay.getTaskID();

        // needs to call a task from the list instead
        thisTask.addEventListener('mouseenter', () => showTaskPreview(_storage__WEBPACK_IMPORTED_MODULE_2__["default"].getTaskByID(thisTask.value)));
        thisTask.addEventListener('mouseleave', () => removeTaskPreview(_storage__WEBPACK_IMPORTED_MODULE_2__["default"].getTaskByID(thisTask.value)));


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
            _storage__WEBPACK_IMPORTED_MODULE_2__["default"].getTaskList().filter((p) => p.getPriority() === 'High').forEach((t) => {
                taskContainer.append(createTaskNode(t));
            });;
            console.log(_storage__WEBPACK_IMPORTED_MODULE_2__["default"].getTaskList().filter((p) => p.getPriority() === 'High'))
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
        _storage__WEBPACK_IMPORTED_MODULE_2__["default"].getTaskList().forEach((t) => {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (View);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/task.js */ "./src/modules/task.js");
/* harmony import */ var _modules_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/view.js */ "./src/modules/view.js");



_modules_view_js__WEBPACK_IMPORTED_MODULE_1__["default"].init();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVyQyw2REFBUyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbW9kYWxzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL215U2FtcGxlQ29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy92aWV3LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgVmlldyBmcm9tIFwiLi92aWV3XCI7XG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5cblxuLy8gc2V0IHVwIGJvdGggbW9kYWxzIFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0VXBNb2RhbHMoKSB7XG4gICAgLy8gTkVXIFRBU0sgbW9kYWxcbiAgICBjb25zdCBuZXdUYXNrTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRhc2stbW9kYWwtd3JhcHBlcicpO1xuICAgIGNvbnN0IG5ld1Rhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXRhc2stYnRuJyk7XG4gICAgY29uc3QgdGFza0Nsb3NlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbW9kYWwtY2xvc2UnKVswXTtcbiAgICBjb25zdCB0YXNrU3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC10YXNrJyk7XG4gICAgbGV0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1zZWxlY3QnKTtcblxuICAgIG5ld1Rhc2tCdG4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBuZXdUYXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIC8vIHNldCB1cCB0aGUgcHJvamVjdCBzZWxlY3QgbWVudVxuICAgICAgICBwcm9qZWN0U2VsZWN0LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBTdG9yYWdlLmdldFByb2plY3RMaXN0KCkuZm9yRWFjaCgocCkgPT4ge1xuICAgICAgICAgICAgbGV0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIHByb2plY3RPcHRpb24uaW5uZXJIVE1MID0gcC5nZXROYW1lKCk7XG4gICAgICAgICAgICBwcm9qZWN0U2VsZWN0LmFwcGVuZENoaWxkKHByb2plY3RPcHRpb24pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY2xvc2VUYXNrTW9kYWwoKSB7XG4gICAgICAgIG5ld1Rhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblxuICAgIHRhc2tDbG9zZUJ0bi5vbmNsaWNrID0gY2xvc2VUYXNrTW9kYWw7XG5cbiAgICB0YXNrU3VibWl0QnRuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gZ2V0IGluZm8gZnJvbSB0aGUgbW9kYWxcbiAgICAgICAgbGV0IG5ld1Rhc2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctdGFzay10aXRsZScpLnZhbHVlO1xuICAgICAgICBsZXQgbmV3VGFza0Rlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXRhc2stZGVzYycpLnZhbHVlO1xuICAgICAgICBsZXQgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXRhc2stcHJpb3JpdHknKTtcbiAgICAgICAgbGV0IG5ld1Rhc2tQcmlvcml0eSA9IHByaW9yaXR5U2VsZWN0Lm9wdGlvbnNbcHJpb3JpdHlTZWxlY3Quc2VsZWN0ZWRJbmRleF0udGV4dDtcbiAgICAgICAgXG5cbiAgICAgICAgLy8gY3JlYXRlIHRoZSBuZXcgdGFza1xuICAgICAgICBsZXQgbmV3VGFzayA9IFRhc2soXG4gICAgICAgICAgICBuZXdUYXNrVGl0bGUsIFxuICAgICAgICAgICAgU3RvcmFnZS5nZXRUYXNrTGlzdCgpLmxlbmd0aCArIDEsIC8vIGlkIGlzIHRoZSBpbmRleCBvbiB0aGUgdGFzayBsaXN0XG4gICAgICAgICAgICBuZXdUYXNrRGVzYywgXG4gICAgICAgICAgICBudWxsLCBudWxsLCAvLyBUT0RPIGR1ZSBkYXRlICYgcHJvamVjdCBcbiAgICAgICAgICAgIG5ld1Rhc2tQcmlvcml0eSk7XG5cbiAgICAgICAgLy8gYXNzaWdpbmcgdGhlIG5ldyB0YXNrIHRvIHRoZSBwcm9qZWN0XG4gICAgICAgIGxldCBuZXdUYXNrUHJvamVjdE5hbWUgPSBwcm9qZWN0U2VsZWN0Lm9wdGlvbnNbcHJvamVjdFNlbGVjdC5zZWxlY3RlZEluZGV4XS50ZXh0OyAvLyBnZXQgdGhlIG5hbWUgZnJvbSB0aGUgZHJvcCBkb3duXG4gICAgICAgIGxldCBuZXdUYXNrUHJvamVjdEluZGV4ID0gU3RvcmFnZS5nZXRQcm9qZWN0TGlzdCgpLmZpbmRJbmRleCgocCkgPT4gcC5nZXROYW1lKCkgPT09IG5ld1Rhc2tQcm9qZWN0TmFtZSk7IC8vIGdldHMgdGhlIGluZGV4IG9mIHRoYXQgcHJvamVjdCBmcm9tIHRoZSBwcm9qZWN0IGxpc3QgaW4gc3RvcmFnZVxuICAgICAgICBTdG9yYWdlLmdldFByb2plY3RMaXN0KClbbmV3VGFza1Byb2plY3RJbmRleF0uYXBwZW5kVGFzayhuZXdUYXNrKTsgLy8gYXBwZW5kIHRoZSBuZXcgdGFzayB0byB0aGF0IHByb2plY3QncyB0YXNrIGxpc3RcblxuICAgICAgICBTdG9yYWdlLmFkZFRhc2sobmV3VGFzayk7XG4gICAgICAgIFZpZXcuZGlzcGxheVRhc2tzKCk7IC8vIFRPRE8gdGhpcyBkb2Vzbid0IHNlZW0gbGlrZSB0aGUgcHJvcGVyIHdheSB0byBkbyB0aGlzLiBGdXR1cmUgQ29udHJvbGxlciBtb2R1bGU/XG4gICAgICAgIGNsb3NlVGFza01vZGFsKCk7XG4gICAgfTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbiAgICAvLyBORVcgUFJPSkVDVCBtb2RhbFxuICAgIGNvbnN0IG5ld1Byb2plY3RNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvamVjdC1tb2RhbC13cmFwcGVyJyk7XG4gICAgY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctcHJvamVjdC1idG4nKTtcbiAgICBjb25zdCBwcm9qZWN0Q2xvc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtb2RhbC1jbG9zZScpWzFdO1xuICAgIGNvbnN0IHByb2plY3RTdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LXByb2plY3QnKTtcblxuICAgIG5ld1Byb2plY3RCdG4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBuZXdQcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNsb3NlUHJvamVjdE1vZGFsKCkge1xuICAgICAgICBuZXdQcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG5cbiAgICBwcm9qZWN0Q2xvc2VCdG4ub25jbGljayA9IGNsb3NlUHJvamVjdE1vZGFsO1xuXG4gICAgcHJvamVjdFN1Ym1pdEJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctcHJvamVjdC10aXRsZScpLnZhbHVlO1xuXG4gICAgICAgIGxldCBuZXdQcm9qZWN0ID0gUHJvamVjdChuZXdQcm9qZWN0TmFtZSk7XG4gICAgICAgIFN0b3JhZ2UuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICAgICAgVmlldy5kaXNwbGF5UHJvamVjdHMoU3RvcmFnZS5nZXRQcm9qZWN0TGlzdCgpKTtcbiAgICAgICAgY2xvc2VQcm9qZWN0TW9kYWwoKTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCJcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcblxuZXhwb3J0IGNvbnN0IHNhbXBsZVRhc2tzID0gW1xuICAgIFRhc2soXCJMZWcgRGF5XCIsIDEsIFwiT25lIG11c3QgbmV2ZXIgc2tpcCBsZWcgZGF5XCIsIG51bGwsIG51bGwsIFwiSGlnaFwiKSxcbiAgICBUYXNrKFwiUHVzaCBEYXlcIiwgMiwgXCJQbGF0ZXMgZm9yIHRoZSBEYXRlc1wiLCBudWxsLCBudWxsLCBcIk1lZGl1bVwiKSxcbiAgICBUYXNrKFwiUHVsbCBEYXlcIiwgMywgXCJDdXJscyBmb3IgdGhlIGd1cmxzXCIsIG51bGwsIG51bGwsIFwiSGlnaFwiKSxcbiAgICBUYXNrKFwiV2F0Y2ggVG9wIEd1blwiLCA0LCBcIk5ldyBvbmUncyBwcmV0dHkgZ29vZCB0aGV5IHNheVwiLCBudWxsLCBudWxsLCBcIkxvd1wiKSxcbiAgICBUYXNrKFwiRmluaXNoIHRoaXMgcHJvamVjdFwiLCA1LCBcIkdvdHRhIGdldCBpdCBkb25lIGV2ZW50dWFsbHlcIiwgbnVsbCwgbnVsbCwgXCJIaWdoXCIpLFxuICAgIFRhc2soXCJJbXByb3ZlIEdpdCBLbm93bGVkZ2VcIiwgNiwgXCJHaXQgaXMgdmVyeSBoZWxwZnVsIGZvciBwcm9ncmFtbWVycyB0byBrbm93XCIsIG51bGwsIG51bGwsIFwiTWVkaXVtXCIpXG4gICAgXTtcblxuY29uc3QgY29kaW5nUHJvamVjdCA9IFByb2plY3QoXCJDb2RpbmdcIiwgbmV3IEFycmF5KHNhbXBsZVRhc2tzWzRdLCBzYW1wbGVUYXNrc1s1XSkpO1xuY29uc3QgZml0bmVzc1Byb2plY3QgPSBQcm9qZWN0KFwiRml0bmVzc1wiLCBuZXcgQXJyYXkoc2FtcGxlVGFza3NbMF0sIHNhbXBsZVRhc2tzWzFdLCBzYW1wbGVUYXNrc1syXSkpO1xuXG5leHBvcnQgY29uc3Qgc2FtcGxlUHJvamVjdHMgPSBbXG4gICAgY29kaW5nUHJvamVjdCwgZml0bmVzc1Byb2plY3QgICAgXG4gICAgXTtcblxuIiwiY29uc3QgUHJvamVjdCA9IChuYW1lLCB0YXNrcyA9IFtdKSA9PiB7ICAgIFxuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBuYW1lO1xuICAgIGNvbnN0IGdldFRhc2tzID0gKCkgPT4gdGFza3M7XG5cbiAgICBjb25zdCBhcHBlbmRUYXNrID0gKHRhc2spID0+IHtcbiAgICAgICAgdGFza3MucHVzaCh0YXNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge25hbWUsIHRhc2tzLCBnZXROYW1lLCBnZXRUYXNrcywgYXBwZW5kVGFza31cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDsiLCJpbXBvcnQgVGFzayBmcm9tICcuL3Rhc2snO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcblxuY29uc3QgU3RvcmFnZSA9ICgoKSA9PiB7XG4gICAgbGV0IHRhc2tMaXN0ID0gW107XG4gICAgbGV0IHByb2plY3RMaXN0ID0gW107XG4gICAgXG4gICAgLy8gYWRkcyB0YXNrIGJ5IHRhc2tJRCB0byBsb2NhbCBzdG9yYWdlXG4gICAgY29uc3QgYWRkVGFzayA9IChuZXdUYXNrKSA9PiB7XG4gICAgICAgIHRhc2tMaXN0LnB1c2gobmV3VGFzayk7XG4gICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5ld1Rhc2suZ2V0VGFza0lELCBKU09OLnN0cmluZ2lmeShuZXdUYXNrKSk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkVGVzdFRhc2sgPSAoKSA9PiB7XG4gICAgICAgIGxldCB0ZXN0VGFzayA9IFRhc2soXG4gICAgICAgICAgICBcIkRvIExlZ3NcIixcbiAgICAgICAgICAgIDIsXG4gICAgICAgICAgICBcIk9uZSBtdXN0IG5ldmVyIHNraXAgbGVnIGRheVwiLFxuICAgICAgICAgICAgbnVsbCwgbnVsbCxcbiAgICAgICAgICAgIFwiTWVkaXVtXCJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrTGlzdCk7XG4gICAgICAgIHRhc2tMaXN0LnB1c2godGVzdFRhc2spO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFRhc2tMaXN0ID0gKCkgPT4gdGFza0xpc3Q7XG4gICAgY29uc3Qgc2V0VGFza0xpc3QgPSAobmV3TGlzdCkgPT4ge1xuICAgICAgICB0YXNrTGlzdCA9IFsuLi5uZXdMaXN0XTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRUYXNrQnlJRCA9IChpZCkgPT4ge1xuICAgICAgICAvLyByZXRyaWV2ZXMgYSB0YXNrIGZyb20gdGhlIGxpc3QgYnkgaXRzIElEIFxuICAgICAgICByZXR1cm4gdGFza0xpc3QuZmlsdGVyKCh0KSA9PiB0LmdldFRhc2tJRCgpID09PSBpZClcbiAgICB9IFxuICAgIFxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAobmV3UHJvamVjdCkgPT4ge1xuICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKG5ld1Byb2plY3QpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFByb2plY3RMaXN0ID0gKCkgPT4gcHJvamVjdExpc3Q7XG5cbiAgICBjb25zdCBzZXRQcm9qZWN0TGlzdCA9IChuZXdQTGlzdCkgPT4ge1xuICAgICAgICBwcm9qZWN0TGlzdCA9IFsuLi5uZXdQTGlzdF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkVGFzaywgZ2V0VGFza0xpc3QsIHNldFRhc2tMaXN0LCBhZGRUZXN0VGFzaywgZ2V0VGFza0J5SUQsXG4gICAgICAgIGFkZFByb2plY3QsIGdldFByb2plY3RMaXN0LCBzZXRQcm9qZWN0TGlzdCxcbiAgICB9O1xuXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBTdG9yYWdlOyIsImNvbnN0IFRhc2sgPSAodGl0bGUsIHRhc2tJRCwgZGVzYywgZHVlRGF0ZSwgcHJvamVjdCwgcHJpb3JpdHkpID0+IHtcbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlO1xuICAgIGNvbnN0IGdldERlc2MgPSAoKSA9PiBkZXNjO1xuICAgIGNvbnN0IGdldER1ZURhdGUgPSAoKSA9PiBkdWVEYXRlO1xuICAgIGNvbnN0IGdldFRhc2tJRCA9ICgpID0+IHRhc2tJRDtcbiAgICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHByaW9yaXR5O1xuICAgIGNvbnN0IGdldFByb2plY3QgPSAoKSA9PiBwcm9qZWN0O1xuXG4gICAgY29uc3QgZ2V0VGFzayA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFt0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJvamVjdCwgcHJpb3JpdHldO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgcHJvamVjdCA9IHByb2plY3Q7XG4gICAgfTtcbiAgICAgXG4gICAgcmV0dXJuIHsgdGl0bGUsIHByaW9yaXR5LCBnZXRUaXRsZSwgZ2V0RGVzYywgZ2V0RHVlRGF0ZSwgZ2V0UHJpb3JpdHksIGdldFRhc2tJRCwgZ2V0VGFzaywgZ2V0UHJvamVjdCwgc2V0UHJvamVjdCB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYXNrOyIsImltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlJztcbmltcG9ydCBzZXRVcE1vZGFscyBmcm9tICcuL21vZGFscyc7XG5pbXBvcnQgeyBzYW1wbGVUYXNrcywgc2FtcGxlUHJvamVjdHMgfSBmcm9tICcuL215U2FtcGxlQ29udGVudCc7XG5cbmNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZiYXInKTtcbmNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1jb250YWluZXInKTtcbmNvbnN0IG1haW5TZWN0aW9uVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jb250ZW50LWhlYWRlcicpO1xuY29uc3Qgc2FtcFByb2pCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2FtcC1wcm9qZWN0cy1idG4nKTtcbmNvbnN0IHRhc2tQcmV2aWV3Qm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stcHJldmlldy1ib3gnKTtcblxuY29uc3QgVmlldyA9ICgoKSA9PiB7XG4gICAgLy8gc3dpdGNoIGJldHdlZW4gdGhlIGFjdGl2ZSBwcm9qZWN0IGRpc3BsYXllZCBpbiB0aGUgbWFpbiBzZWN0aW9uXG4gICAgbGV0IGFjdGl2ZVByb2plY3QgPSAnSG9tZSc7XG4gICAgbWFpblNlY3Rpb25UaXRsZS5pbm5lckhUTUwgPSBhY3RpdmVQcm9qZWN0O1xuXG4gICAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgaW5pdGlhbFBvcHVsYXRlTmF2KCk7XG4gICAgICAgIGluaXRpYWxQb3B1bGF0ZU1haW4oKTtcbiAgICAgICAgc2V0VXBNb2RhbHMoKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbml0aWFsUG9wdWxhdGVOYXYgPSAoKSA9PiB7XG4gICAgICAgIC8vIGhvbWUgYW5kIGhpZ2ggcHJpb3JpdHlcbiAgICAgICAgY29uc3QgaG9tZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaG9tZVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnbmF2LXNlY3Rpb24nLCAnbmF2LXByb2plY3QnKTtcbiAgICAgICAgaG9tZVNlY3Rpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdob21lJyk7XG4gICAgICAgIGhvbWVTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuYXR0cmlidXRlc1sxXS52YWx1ZSk7XG4gICAgICAgICAgICBzZXRDdXJyZW50UHJvamVjdChlLnRhcmdldC5hdHRyaWJ1dGVzWzFdLnZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGhvbWVTZWN0aW9uLmlubmVySFRNTCA9IFwiSG9tZVwiO1xuXG4gICAgICAgIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoaWdoUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnbmF2LXNlY3Rpb24nLCAnbmF2LXByb2plY3QnKTtcbiAgICAgICAgaGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnaGlnaC1wcmlvcml0eS1wcm9qZWN0cycpO1xuICAgICAgICBoaWdoUHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBzZXRDdXJyZW50UHJvamVjdChlLnRhcmdldC5hdHRyaWJ1dGVzWzFdLnZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGhpZ2hQcmlvcml0eS5pbm5lckhUTUwgPSBcIkhpZ2ggUHJpb3JpdHlcIjtcblxuICAgICAgICBjb25zdCBwcm9qZWN0SGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIHByb2plY3RIZWFkLmNsYXNzTGlzdC5hZGQoJ25hdi1zZWN0aW9uJyk7XG4gICAgICAgIHByb2plY3RIZWFkLmlubmVySFRNTCA9IFwiUHJvamVjdHNcIjtcblxuICAgICAgICBjb25zdCBwcm9qZWN0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RCb3guc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtYm94Jyk7XG5cbiAgICAgICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2FkZC1idG4nKTtcbiAgICAgICAgYWRkUHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ldy1wcm9qZWN0LWJ0bicpO1xuICAgICAgICBhZGRQcm9qZWN0QnRuLmlubmVySFRNTCA9ICcrIE5ldyBQcm9qZWN0JztcblxuICAgICAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnYWRkLWJ0bicpO1xuICAgICAgICBhZGRUYXNrQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCduZXctdGFzay1idG4nKTsgLy8gZnVuY3Rpb25hbGl0eSBpbiBtb2RhbHMuanNcbiAgICAgICAgYWRkVGFza0J0bi5pbm5lckhUTUwgPSAnKyBOZXcgVGFzayc7XG5cbiAgICAgICAgbmF2QmFyLmFwcGVuZChob21lU2VjdGlvbiwgaGlnaFByaW9yaXR5LCBwcm9qZWN0SGVhZCwgcHJvamVjdEJveCwgYWRkUHJvamVjdEJ0biwgYWRkVGFza0J0bik7XG4gICAgfVxuXG4gICAgY29uc3QgaW5pdGlhbFBvcHVsYXRlTWFpbiA9ICgpID0+IHtcbiAgICAgICAgLy8gcG9wdWxhdGUgdGhlIG1haW4gc2VjdGlvbiB3aXRoIHRoZSB0YXNrcyBmcm9tIHRoZSBjdXJyZW50IHByb2plY3RcbiAgICAgICAgY29uc3QgZmlyc3RUYXNrID0gVGFzayhcbiAgICAgICAgICAgICdBZGQgcHJvamVjdHMgJiB0YXNrcycsXG4gICAgICAgICAgICAxLCBcbiAgICAgICAgICAgICdUbyBtYWtlIGFueSB1c2Ugb3V0IG9mIGEgdG8tZG8gbGlzdCBhcHAsIEkgc2hvdWxkIHByb2JhYmx5IGFkZCBzb21ldGhpbmcgdG8gaXQuJyxcbiAgICAgICAgICAgIG51bGwsIG51bGwsIC8vIGR1ZURhdGUgYW5kIHByb2plY3RcbiAgICAgICAgICAgIFwiSGlnaFwiKTsgXG5cbiAgICAgICAgU3RvcmFnZS5hZGRUYXNrKGZpcnN0VGFzayk7XG5cbiAgICAgICAgU3RvcmFnZS5nZXRUYXNrTGlzdCgpLmZvckVhY2goKHQpID0+IHtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kKGNyZWF0ZVRhc2tOb2RlKHQpKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGxvYWRTYW1wbGVzID0gKCkgPT4ge1xuICAgICAgICAvLyBsb2FkcyBzb21lIHNhbXBsZSBwcm9qZWN0c1xuICAgICAgICBTdG9yYWdlLnNldFRhc2tMaXN0KHNhbXBsZVRhc2tzKTtcbiAgICAgICAgU3RvcmFnZS5zZXRQcm9qZWN0TGlzdChzYW1wbGVQcm9qZWN0cyk7XG4gICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgICAgICBkaXNwbGF5UHJvamVjdHMoU3RvcmFnZS5nZXRQcm9qZWN0TGlzdCgpKTtcbiAgICB9XG4gICAgc2FtcFByb2pCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkU2FtcGxlcyk7XG5cbiAgICBjb25zdCBjcmVhdGVUYXNrTm9kZSA9ICh0YXNrVG9EaXNwbGF5KSA9PiB7XG4gICAgICAgIC8vIHJldHVybiBhIGZvcm1hdHRlZCB0YXNrIGh0bWwgbm9kZSB0aGF0IGNhbiBiZSBhZGRlZCB0byB0aGUgZG9tXG4gICAgICAgIGxldCB0aGlzVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzVGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gICAgICAgIHRoaXNUYXNrLnZhbHVlID0gdGFza1RvRGlzcGxheS5nZXRUYXNrSUQoKTtcblxuICAgICAgICAvLyBuZWVkcyB0byBjYWxsIGEgdGFzayBmcm9tIHRoZSBsaXN0IGluc3RlYWRcbiAgICAgICAgdGhpc1Rhc2suYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHNob3dUYXNrUHJldmlldyhTdG9yYWdlLmdldFRhc2tCeUlEKHRoaXNUYXNrLnZhbHVlKSkpO1xuICAgICAgICB0aGlzVGFzay5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4gcmVtb3ZlVGFza1ByZXZpZXcoU3RvcmFnZS5nZXRUYXNrQnlJRCh0aGlzVGFzay52YWx1ZSkpKTtcblxuXG4gICAgICAgIGxldCB0YXNrTmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrTmFtZURpdi5pbm5lckhUTUwgPSB0YXNrVG9EaXNwbGF5LmdldFRpdGxlKCk7IFxuXG4gICAgICAgIGxldCB0YXNrUHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza1ByaW9yaXR5RGl2LmlubmVySFRNTCA9IHRhc2tUb0Rpc3BsYXkuZ2V0UHJpb3JpdHkoKTtcbiAgICAgICAgdGFza1ByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoYHByaW9yaXR5LSR7dGFza1RvRGlzcGxheS5nZXRQcmlvcml0eSgpfWApO1xuXG4gICAgICAgIHRoaXNUYXNrLmFwcGVuZCh0YXNrTmFtZURpdiwgdGFza1ByaW9yaXR5RGl2KTtcblxuICAgICAgICByZXR1cm4gdGhpc1Rhc2s7XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd1Rhc2tQcmV2aWV3ID0gKHRhc2tUb1ByZXZpZXcpID0+IHtcbiAgICAgICAgdGFza1ByZXZpZXdCb3guaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRhc2tQcmV2aWV3Qm94LmlubmVySFRNTCA9IFxuICAgICAgICBgXG4gICAgICAgIDxoMz4ke3Rhc2tUb1ByZXZpZXdbMF0uZ2V0VGl0bGUoKX08L2gzPlxuICAgICAgICA8cD4ke3Rhc2tUb1ByZXZpZXdbMF0uZ2V0RGVzYygpfTwvcD5cbiAgICAgICAgPHAgY2xhc3M9J3ByaW9yaXR5LSR7dGFza1RvUHJldmlld1swXS5nZXRQcmlvcml0eSgpfSc+UHJpb3JpdHk6ICR7dGFza1RvUHJldmlld1swXS5nZXRQcmlvcml0eSgpfTwvcD5cbiAgICAgICAgYFxuXG4gICAgICAgIHRhc2tQcmV2aWV3Qm94LmNsYXNzTGlzdC5yZXBsYWNlKCdoaWRkZW4nLCd2aXNpYmxlJyk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbW92ZVRhc2tQcmV2aWV3ID0gKHRhc2tUb1ByZXZpZXcpID0+IHtcbiAgICAgICAgdGFza1ByZXZpZXdCb3guY2xhc3NMaXN0LnJlcGxhY2UoJ3Zpc2libGUnLCAnaGlkZGVuJyk7XG4gICAgICAgIC8vIHRhc2tQcmV2aWV3Qm94LmNsYXNzTGlzdC5yZXBsYWNlKGBwcmlvcml0eS0ke3Rhc2tUb1ByZXZpZXdbMF0uZ2V0UHJpb3JpdHkoKX1gLCduYScpO1xuICAgIH07XG5cbiAgICAvLyBzZXRzIHRoZSBwcm9qZWN0IHRoYXQgaXMgZGlzcGxheWVkIGluIHRoZSBtYWluIHNlY3Rpb25cbiAgICAvLyBtb3ZlIHRvIGEgY29udHJvbGxlcj9cbiAgICBjb25zdCBzZXRDdXJyZW50UHJvamVjdCA9IChuZXdQcm9qZWN0KSA9PiB7XG4gICAgICAgIGlmIChuZXdQcm9qZWN0ID09PSAnaG9tZScpIHtcbiAgICAgICAgICAgIGFjdGl2ZVByb2plY3QgPSAnSG9tZSc7XG4gICAgICAgICAgICBkaXNwbGF5VGFza3MoKTtcbiAgICAgICAgfSBlbHNlIGlmIChuZXdQcm9qZWN0ID09PSAnaGlnaC1wcmlvcml0eS1wcm9qZWN0cycpIHtcbiAgICAgICAgICAgIGFjdGl2ZVByb2plY3QgPSBcIkhpZ2ggUHJpb3JpdHlcIjtcbiAgICAgICAgICAgIG1haW5TZWN0aW9uVGl0bGUuaW5uZXJIVE1MID0gJ0hpZ2ggUHJpb3JpdHknO1xuICAgICAgICAgICAgLy8gZGlzcGxheSBvbmx5IGhpZ2ggcHJpb3JpdHkgcHJvamVjdHNcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBTdG9yYWdlLmdldFRhc2tMaXN0KCkuZmlsdGVyKChwKSA9PiBwLmdldFByaW9yaXR5KCkgPT09ICdIaWdoJykuZm9yRWFjaCgodCkgPT4ge1xuICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kKGNyZWF0ZVRhc2tOb2RlKHQpKTtcbiAgICAgICAgICAgIH0pOztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFN0b3JhZ2UuZ2V0VGFza0xpc3QoKS5maWx0ZXIoKHApID0+IHAuZ2V0UHJpb3JpdHkoKSA9PT0gJ0hpZ2gnKSlcbiAgICAgICAgICAgIC8vIGRpc3BsYXlUYXNrcygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY2xlYXIgdGFzayBib3hcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgIC8vIHNldHMgdGhlIHByb2plY3QgbmFtZSBhcyB0aGUgaGVhZGVyXG4gICAgICAgICAgICBtYWluU2VjdGlvblRpdGxlLmlubmVySFRNTCA9IG5ld1Byb2plY3QuZ2V0TmFtZSgpO1xuICAgICAgICAgICAgLy8gYWRkIGVhY2ggdGFzayBmcm9tIHRoYXQgcHJvamVjdCB0byB0aGUgdGFzayBjb250YWluZXJcbiAgICAgICAgICAgIG5ld1Byb2plY3QuZ2V0VGFza3MoKS5mb3JFYWNoKCh0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmQoY3JlYXRlVGFza05vZGUodCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8vIGRpc3BsYXlzIEFsbCB0YXNrc1xuICAgIGNvbnN0IGRpc3BsYXlUYXNrcyA9ICgpID0+IHtcbiAgICAgICAgbWFpblNlY3Rpb25UaXRsZS5pbm5lckhUTUwgPSBhY3RpdmVQcm9qZWN0O1xuICAgICAgICB0YXNrQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBTdG9yYWdlLmdldFRhc2tMaXN0KCkuZm9yRWFjaCgodCkgPT4ge1xuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmQoY3JlYXRlVGFza05vZGUodCkpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG5cbiAgICBjb25zdCBkaXNwbGF5UHJvamVjdHMgPSAocHJvamVjdExpc3QpID0+IHsgXG4gICAgICAgIGNvbnN0IHByb2plY3RCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1ib3gnKTtcbiAgICAgICAgcHJvamVjdEJveC5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKChwKSA9PiB7XG4gICAgICAgICAgICBsZXQgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcm9qZWN0TGFiZWwuY2xhc3NMaXN0LmFkZCgnbmF2LXNlY3Rpb24nLCAnbmF2LXByb2plY3QnKTtcbiAgICAgICAgICAgIHByb2plY3RMYWJlbC5pbm5lckhUTUwgPSBwLmdldE5hbWUoKTtcbiAgICAgICAgICAgIHByb2plY3RMYWJlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFByb2plY3QocCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHByb2plY3RCb3guYXBwZW5kKHByb2plY3RMYWJlbCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7IGluaXQsIGRpc3BsYXlUYXNrcywgZGlzcGxheVByb2plY3RzfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgVmlldzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBUYXNrIGZyb20gJy4vbW9kdWxlcy90YXNrLmpzJztcbmltcG9ydCBWaWV3IGZyb20gJy4vbW9kdWxlcy92aWV3LmpzJztcblxuVmlldy5pbml0KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
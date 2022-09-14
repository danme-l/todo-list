/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/mySampleContent.js":
/*!****************************************!*\
  !*** ./src/modules/mySampleContent.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");


const sampleTasks = [
    (0,_task__WEBPACK_IMPORTED_MODULE_0__["default"])("Leg Day", 1, "One must never skip leg day", null, null, "High"),
    (0,_task__WEBPACK_IMPORTED_MODULE_0__["default"])("Push Day", 2, "Plates for the Dates", null, null, "High"),
    (0,_task__WEBPACK_IMPORTED_MODULE_0__["default"])("Pull Day", 3, "Curls for the gurls", null, null, "High"),
    (0,_task__WEBPACK_IMPORTED_MODULE_0__["default"])("Watch Top Gun", 4, "New one's pretty good they say", null, null, "High"),
    (0,_task__WEBPACK_IMPORTED_MODULE_0__["default"])("Finish this project", 5, "Gotta get it done eventually", null, null, "High"),
]

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sampleTasks);

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
const Project = (name) => {
    let tasks = [];
    
    const getName = () => name;
    const getTasks = () => tasks;

    return {name, tasks, getName, getTasks}
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


const Storage = (() => {
    let taskList = [];
    
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

    
    return {addTask, getTaskList, setTaskList, addTestTask};

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

    const getTask = (domItem) => {
        console.log(title);
        console.log(desc);
        console.log(dueDate);
        console.log(priority);
        
        return [title, desc, dueDate, project, priority];
    };
    return { title, getTitle, getDesc, getDueDate, getPriority, getTaskID, getTask }
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
/* harmony import */ var _mySampleContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mySampleContent */ "./src/modules/mySampleContent.js");





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
            _storage__WEBPACK_IMPORTED_MODULE_2__["default"].addTestTask();
            displayTasks();
        });
        addTaskBtn.innerHTML = '+ New Task';

        navBar.append(homeSection, highPriority, projectHead, addProjectBtn, addTaskBtn);
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
        _storage__WEBPACK_IMPORTED_MODULE_2__["default"].setTaskList(_mySampleContent__WEBPACK_IMPORTED_MODULE_3__["default"]);
        console.log(_mySampleContent__WEBPACK_IMPORTED_MODULE_3__["default"]);
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
            _storage__WEBPACK_IMPORTED_MODULE_2__["default"].getTaskList().filter()
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
        _storage__WEBPACK_IMPORTED_MODULE_2__["default"].getTaskList().forEach((t) => {
            taskContainer.append(createTaskNode(t));
        });
    };



    return { init, }
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



const task1 = (0,_modules_task_js__WEBPACK_IMPORTED_MODULE_0__["default"])('finish this proj', 'todo project for the odin project', 'not due anytime', 'priority = low');

_modules_view_js__WEBPACK_IMPORTED_MODULE_1__["default"].init();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7O0FBRXpCO0FBQ0EsSUFBSSxpREFBSTtBQUNSLElBQUksaURBQUk7QUFDUixJQUFJLGlEQUFJO0FBQ1IsSUFBSSxpREFBSTtBQUNSLElBQUksaURBQUk7QUFDUjs7QUFFQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7OztBQ1YxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7QUFFQSxpRUFBZSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7QUNUSTs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixpREFBSTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTs7QUFFWixDQUFDOztBQUVELGlFQUFlLE9BQU87Ozs7Ozs7Ozs7Ozs7O0FDbEN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQk87QUFDTTtBQUNBO0FBQ1k7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw0REFBbUI7QUFDL0I7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLGlEQUFJO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSx3REFBZTs7QUFFdkIsUUFBUSw0REFBbUI7QUFDM0I7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLFFBQVEsNERBQW1CLENBQUMsd0RBQVc7QUFDdkMsb0JBQW9CLHdEQUFXO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrREFBa0QsNEJBQTRCOztBQUU5RTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsWUFBWSw0REFBbUI7QUFDL0I7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNERBQW1CO0FBQzNCO0FBQ0EsU0FBUztBQUNUOzs7O0FBSUEsYUFBYTtBQUNiLENBQUM7O0FBRUQsaUVBQWUsSUFBSTs7Ozs7O1VDbkpuQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05xQztBQUNBOztBQUVyQyxjQUFjLDREQUFJOztBQUVsQiw2REFBUyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbXlTYW1wbGVDb250ZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIlxuXG5jb25zdCBzYW1wbGVUYXNrcyA9IFtcbiAgICBUYXNrKFwiTGVnIERheVwiLCAxLCBcIk9uZSBtdXN0IG5ldmVyIHNraXAgbGVnIGRheVwiLCBudWxsLCBudWxsLCBcIkhpZ2hcIiksXG4gICAgVGFzayhcIlB1c2ggRGF5XCIsIDIsIFwiUGxhdGVzIGZvciB0aGUgRGF0ZXNcIiwgbnVsbCwgbnVsbCwgXCJIaWdoXCIpLFxuICAgIFRhc2soXCJQdWxsIERheVwiLCAzLCBcIkN1cmxzIGZvciB0aGUgZ3VybHNcIiwgbnVsbCwgbnVsbCwgXCJIaWdoXCIpLFxuICAgIFRhc2soXCJXYXRjaCBUb3AgR3VuXCIsIDQsIFwiTmV3IG9uZSdzIHByZXR0eSBnb29kIHRoZXkgc2F5XCIsIG51bGwsIG51bGwsIFwiSGlnaFwiKSxcbiAgICBUYXNrKFwiRmluaXNoIHRoaXMgcHJvamVjdFwiLCA1LCBcIkdvdHRhIGdldCBpdCBkb25lIGV2ZW50dWFsbHlcIiwgbnVsbCwgbnVsbCwgXCJIaWdoXCIpLFxuXVxuXG5leHBvcnQgZGVmYXVsdCBzYW1wbGVUYXNrczsiLCJjb25zdCBQcm9qZWN0ID0gKG5hbWUpID0+IHtcbiAgICBsZXQgdGFza3MgPSBbXTtcbiAgICBcbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcbiAgICBjb25zdCBnZXRUYXNrcyA9ICgpID0+IHRhc2tzO1xuXG4gICAgcmV0dXJuIHtuYW1lLCB0YXNrcywgZ2V0TmFtZSwgZ2V0VGFza3N9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7IiwiaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcblxuY29uc3QgU3RvcmFnZSA9ICgoKSA9PiB7XG4gICAgbGV0IHRhc2tMaXN0ID0gW107XG4gICAgXG4gICAgLy8gYWRkcyB0YXNrIGJ5IHRhc2tJRCB0byBsb2NhbCBzdG9yYWdlXG4gICAgY29uc3QgYWRkVGFzayA9IChuZXdUYXNrKSA9PiB7XG4gICAgICAgIHRhc2tMaXN0LnB1c2gobmV3VGFzayk7XG4gICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5ld1Rhc2suZ2V0VGFza0lELCBKU09OLnN0cmluZ2lmeShuZXdUYXNrKSk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkVGVzdFRhc2sgPSAoKSA9PiB7XG4gICAgICAgIGxldCB0ZXN0VGFzayA9IFRhc2soXG4gICAgICAgICAgICBcIkRvIExlZ3NcIixcbiAgICAgICAgICAgIDIsXG4gICAgICAgICAgICBcIk9uZSBtdXN0IG5ldmVyIHNraXAgbGVnIGRheVwiLFxuICAgICAgICAgICAgbnVsbCwgbnVsbCxcbiAgICAgICAgICAgIFwiTWVkaXVtXCJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrTGlzdCk7XG4gICAgICAgIHRhc2tMaXN0LnB1c2godGVzdFRhc2spO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFRhc2tMaXN0ID0gKCkgPT4gdGFza0xpc3Q7XG4gICAgY29uc3Qgc2V0VGFza0xpc3QgPSAobmV3TGlzdCkgPT4ge1xuICAgICAgICB0YXNrTGlzdCA9IFsuLi5uZXdMaXN0XTtcbiAgICB9XG5cbiAgICBcbiAgICByZXR1cm4ge2FkZFRhc2ssIGdldFRhc2tMaXN0LCBzZXRUYXNrTGlzdCwgYWRkVGVzdFRhc2t9O1xuXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBTdG9yYWdlOyIsImNvbnN0IFRhc2sgPSAodGl0bGUsIHRhc2tJRCwgZGVzYywgZHVlRGF0ZSwgcHJvamVjdCwgcHJpb3JpdHkpID0+IHtcbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlO1xuICAgIGNvbnN0IGdldERlc2MgPSAoKSA9PiBkZXNjO1xuICAgIGNvbnN0IGdldER1ZURhdGUgPSAoKSA9PiBkdWVEYXRlO1xuICAgIGNvbnN0IGdldFRhc2tJRCA9ICgpID0+IHRhc2tJRDtcbiAgICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHByaW9yaXR5O1xuXG4gICAgY29uc3QgZ2V0VGFzayA9IChkb21JdGVtKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRpdGxlKTtcbiAgICAgICAgY29uc29sZS5sb2coZGVzYyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGR1ZURhdGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhwcmlvcml0eSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gW3RpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcm9qZWN0LCBwcmlvcml0eV07XG4gICAgfTtcbiAgICByZXR1cm4geyB0aXRsZSwgZ2V0VGl0bGUsIGdldERlc2MsIGdldER1ZURhdGUsIGdldFByaW9yaXR5LCBnZXRUYXNrSUQsIGdldFRhc2sgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFzazsiLCJpbXBvcnQgVGFzayBmcm9tICcuL3Rhc2snO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vc3RvcmFnZSc7XG5pbXBvcnQgc2FtcGxlVGFza3MgZnJvbSAnLi9teVNhbXBsZUNvbnRlbnQnO1xuXG5jb25zdCBuYXZCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2YmFyJyk7XG5jb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWNvbnRlbnQnKTtcbmNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1jb250YWluZXInKTtcbmNvbnN0IG1haW5TZWN0aW9uVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jb250ZW50LWhlYWRlcicpO1xuY29uc3Qgc2FtcFByb2pCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2FtcC1wcm9qZWN0cy1idG4nKTtcblxuY29uc3QgVmlldyA9ICgoKSA9PiB7XG4gICAgLy8gc3dpdGNoIGJldHdlZW4gdGhlIGFjdGl2ZSBwcm9qZWN0IGRpc3BsYXllZCBpbiB0aGUgbWFpbiBzZWN0aW9uXG4gICAgbGV0IGFjdGl2ZVByb2plY3QgPSAnSG9tZSc7XG5cbiAgICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgICAgICBpbml0aWFsUG9wdWxhdGVOYXYoKTtcbiAgICAgICAgaW5pdGlhbFBvcHVsYXRlTWFpbigpO1xuICAgIH1cblxuICAgIGNvbnN0IGluaXRpYWxQb3B1bGF0ZU5hdiA9ICgpID0+IHtcbiAgICAgICAgLy8gaG9tZSBhbmQgaGlnaCBwcmlvcml0eVxuICAgICAgICBjb25zdCBob21lU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBob21lU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCduYXYtc2VjdGlvbicsICduYXYtcHJvamVjdCcpO1xuICAgICAgICBob21lU2VjdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2hvbWUnKTtcbiAgICAgICAgaG9tZVNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5hdHRyaWJ1dGVzWzFdLnZhbHVlKTtcbiAgICAgICAgICAgIHNldEN1cnJlbnRQcm9qZWN0KGUudGFyZ2V0LmF0dHJpYnV0ZXNbMV0udmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgaG9tZVNlY3Rpb24uaW5uZXJIVE1MID0gXCJIb21lXCI7XG5cbiAgICAgICAgY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhpZ2hQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCduYXYtc2VjdGlvbicsICduYXYtcHJvamVjdCcpO1xuICAgICAgICBoaWdoUHJpb3JpdHkuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdoaWdoLXByaW9yaXR5LXByb2plY3RzJyk7XG4gICAgICAgIGhpZ2hQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmF0dHJpYnV0ZXNbMV0udmFsdWUpO1xuICAgICAgICAgICAgc2V0Q3VycmVudFByb2plY3QoZS50YXJnZXQuYXR0cmlidXRlc1sxXS52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBoaWdoUHJpb3JpdHkuaW5uZXJIVE1MID0gXCJIaWdoIFByaW9yaXR5XCI7XG5cbiAgICAgICAgLy8gVE9ETyBlYWNoIG5hdi1wcm9qZWN0IG5lZWRzIGFuIG9uY2xpY2soKSB0aGF0IHdpbGwgc2V0IHRoZSBjdXJyZW50IHByb2plY3RcblxuICAgICAgICBjb25zdCBwcm9qZWN0SGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIHByb2plY3RIZWFkLmNsYXNzTGlzdC5hZGQoJ25hdi1zZWN0aW9uJyk7XG4gICAgICAgIHByb2plY3RIZWFkLmlubmVySFRNTCA9IFwiUHJvamVjdHNcIjtcblxuICAgICAgICAvLyBUT0RPIHBvcHVsYXRlUHJvamVjdHNTZWN0aW9uKCk7XG5cbiAgICAgICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2FkZC1idG4nKTtcbiAgICAgICAgYWRkUHJvamVjdEJ0bi5pbm5lckhUTUwgPSAnKyBOZXcgUHJvamVjdCc7XG5cbiAgICAgICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2FkZC1idG4nKTtcbiAgICAgICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIC8vIHRoaXMgYWRkcyB0aGUgdGVzdCB0YXNrIGZvciBub3cgYW5kIHJlLWNhbGxzIHRoZSBkaXNwbGF5IGJ1dHRvblxuICAgICAgICAgICAgLy8gVE9ETyB0aGlzIHNob3VsZCBicmluZyB1cCBhIHRhc2sgYWRkaW5nIG1vZGFsXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldClcbiAgICAgICAgICAgIFN0b3JhZ2UuYWRkVGVzdFRhc2soKTtcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgICAgICB9KTtcbiAgICAgICAgYWRkVGFza0J0bi5pbm5lckhUTUwgPSAnKyBOZXcgVGFzayc7XG5cbiAgICAgICAgbmF2QmFyLmFwcGVuZChob21lU2VjdGlvbiwgaGlnaFByaW9yaXR5LCBwcm9qZWN0SGVhZCwgYWRkUHJvamVjdEJ0biwgYWRkVGFza0J0bik7XG4gICAgfVxuXG4gICAgY29uc3QgaW5pdGlhbFBvcHVsYXRlTWFpbiA9ICgpID0+IHtcbiAgICAgICAgLy8gcG9wdWxhdGUgdGhlIG1haW4gc2VjdGlvbiB3aXRoIHRoZSB0YXNrcyBmcm9tIHRoZSBjdXJyZW50IHByb2plY3RcbiAgICAgICAgY29uc3QgZmlyc3RUYXNrID0gVGFzayhcbiAgICAgICAgICAgICdBZGQgcHJvamVjdHMgJiB0YXNrcycsXG4gICAgICAgICAgICAxLCBcbiAgICAgICAgICAgICdUbyBtYWtlIGFueSB1c2Ugb3V0IG9mIGEgdG8tZG8gbGlzdCBhcHAsIEkgc2hvdWxkIHByb2JhYmx5IGFkZCBzb21ldGhpbmcgdG8gaXQuJyxcbiAgICAgICAgICAgIG51bGwsIG51bGwsIC8vIGR1ZURhdGUgYW5kIHByb2plY3RcbiAgICAgICAgICAgIFwiSGlnaFwiKTsgXG5cbiAgICAgICAgU3RvcmFnZS5hZGRUYXNrKGZpcnN0VGFzayk7XG5cbiAgICAgICAgU3RvcmFnZS5nZXRUYXNrTGlzdCgpLmZvckVhY2goKHQpID0+IHtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kKGNyZWF0ZVRhc2tOb2RlKHQpKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGxvYWRTYW1wbGVzID0gKCkgPT4ge1xuICAgICAgICAvLyBsb2FkcyBzb21lIHNhbXBsZSBwcm9qZWN0c1xuICAgICAgICBTdG9yYWdlLnNldFRhc2tMaXN0KHNhbXBsZVRhc2tzKTtcbiAgICAgICAgY29uc29sZS5sb2coc2FtcGxlVGFza3MpO1xuICAgICAgICBkaXNwbGF5VGFza3MoKTtcbiAgICB9XG4gICAgc2FtcFByb2pCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkU2FtcGxlcyk7XG5cbiAgICBjb25zdCBjcmVhdGVUYXNrTm9kZSA9ICh0YXNrVG9EaXNwbGF5KSA9PiB7XG4gICAgICAgIC8vIHJldHVybiBhIGZvcm1hdHRlZCB0YXNrIGh0bWwgbm9kZSB0aGF0IGNhbiBiZSBhZGRlZCB0byB0aGUgZG9tXG4gICAgICAgIGxldCB0aGlzVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzVGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG5cbiAgICAgICAgbGV0IHRhc2tOYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tOYW1lRGl2LmlubmVySFRNTCA9IHRhc2tUb0Rpc3BsYXkuZ2V0VGl0bGUoKTsgXG5cbiAgICAgICAgbGV0IHRhc2tQcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrUHJpb3JpdHlEaXYuaW5uZXJIVE1MID0gdGFza1RvRGlzcGxheS5nZXRQcmlvcml0eSgpO1xuICAgICAgICB0YXNrUHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZChgcHJpb3JpdHktJHt0YXNrVG9EaXNwbGF5LmdldFByaW9yaXR5KCl9YCk7XG5cbiAgICAgICAgdGhpc1Rhc2suYXBwZW5kKHRhc2tOYW1lRGl2LCB0YXNrUHJpb3JpdHlEaXYpO1xuXG4gICAgICAgIHJldHVybiB0aGlzVGFzaztcbiAgICB9XG5cbiAgICAvLyBzZXRzIHRoZSBwcm9qZWN0IHRoYXQgaXMgZGlzcGxheWVkIGluIHRoZSBtYWluIHNlY3Rpb25cbiAgICAvLyBtb3ZlIHRvIGEgY29udHJvbGxlcj9cbiAgICBjb25zdCBzZXRDdXJyZW50UHJvamVjdCA9IChuZXdQcm9qZWN0KSA9PiB7XG4gICAgICAgIGlmIChuZXdQcm9qZWN0ID09PSAnaG9tZScpIHtcbiAgICAgICAgICAgIG1haW5TZWN0aW9uVGl0bGUuaW5uZXJIVE1MID0gJ0hvbWUnO1xuICAgICAgICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgICAgIH0gZWxzZSBpZiAobmV3UHJvamVjdCA9PT0gJ2hpZ2gtcHJpb3JpdHktcHJvamVjdHMnKSB7XG4gICAgICAgICAgICBtYWluU2VjdGlvblRpdGxlLmlubmVySFRNTCA9ICdIaWdoIFByaW9yaXR5JztcbiAgICAgICAgICAgIC8vIGRpc3BsYXkgb25seSBoaWdoIHByaW9yaXR5IHByb2plY3RzXG4gICAgICAgICAgICBTdG9yYWdlLmdldFRhc2tMaXN0KCkuZmlsdGVyKClcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgICAgICAgICAvLyBmb3Igbm93IHRoaXMgaXMgYSBzdHJpbmcgYnV0IHdpbGwgZXZlbnR1YWxseSBiZSBhIHByb2plY3RcbiAgICAgICAgICAgIG1haW5TZWN0aW9uVGl0bGUuaW5uZXJIVE1MID0gbmV3UHJvamVjdDtcbiAgICAgICAgICAgIG1haW5Db250ZW50LmFwcGVuZChtYWluU2VjdGlvblRpdGxlKTtcblxuICAgICAgICAgICAgLy8gVE9ETyByZXRyaXZlIHRoZSBwcm9qZWN0IGxpc3QgYW5kIGxvYWQgdGhlIHRhc2tzXG4gICAgICAgICAgICAvLyBuZXdQcm9qZWN0LmdldFRhc2tzKClcblxuICAgICAgICAgICAgLy8gVE9ETyBhZGRzIHRoZSBhZGQgdGFzayBidXR0b24gdG8gdGhlIGJvdHRvbSBvZiB0aGUgc2VjdGlvblxuICAgICAgICAgICAgLy8gYXBwZW5kQWRkVGFza0J1dHRvbigpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBjb25zdCBkaXNwbGF5VGFza3MgPSAoKSA9PiB7XG4gICAgICAgIG1haW5TZWN0aW9uVGl0bGUuaW5uZXJIVE1MID0gYWN0aXZlUHJvamVjdDtcbiAgICAgICAgdGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgU3RvcmFnZS5nZXRUYXNrTGlzdCgpLmZvckVhY2goKHQpID0+IHtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kKGNyZWF0ZVRhc2tOb2RlKHQpKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuXG5cbiAgICByZXR1cm4geyBpbml0LCB9XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBWaWV3OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRhc2sgZnJvbSAnLi9tb2R1bGVzL3Rhc2suanMnO1xuaW1wb3J0IFZpZXcgZnJvbSAnLi9tb2R1bGVzL3ZpZXcuanMnO1xuXG5jb25zdCB0YXNrMSA9IFRhc2soJ2ZpbmlzaCB0aGlzIHByb2onLCAndG9kbyBwcm9qZWN0IGZvciB0aGUgb2RpbiBwcm9qZWN0JywgJ25vdCBkdWUgYW55dGltZScsICdwcmlvcml0eSA9IGxvdycpO1xuXG5WaWV3LmluaXQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
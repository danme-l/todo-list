import Task from './task';

const Storage = (() => {
    let taskList = [];
    
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

    
    return {addTask, getTaskList, setTaskList, addTestTask};

})();

export default Storage;
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
    return { title, priority, getTitle, getDesc, getDueDate, getPriority, getTaskID, getTask }
};

export default Task;
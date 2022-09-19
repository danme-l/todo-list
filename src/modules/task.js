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

export default Task;
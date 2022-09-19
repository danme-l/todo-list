const Project = (name, tasks = []) => {    
    const getName = () => name;
    const getTasks = () => tasks;

    const appendTask = (task) => {
        tasks.push(task);
    }

    return {name, tasks, getName, getTasks, appendTask}
}

export default Project;
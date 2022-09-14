const Project = (name) => {
    let tasks = [];
    
    const getName = () => name;
    const getTasks = () => tasks;

    return {name, tasks, getName, getTasks}
}

export default Project;
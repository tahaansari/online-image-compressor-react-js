import Task from "./Task"
const getTasks = () => {
    let tasks = [];
    for(let i = 0; i<100; i++){
        tasks.push(<Task key={i}/>)
    }
    return tasks
}
const Tasks = () => {
    return (
        <>{getTasks()}</>
    )
}
export default Tasks
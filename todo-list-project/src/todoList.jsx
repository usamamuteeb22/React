import { useState } from "react"

function TodoList(){
    const [tasks,setTasks] = useState([])
    const [newTask, setNewTask] = useState('')

    function handleInputChange(event){
        setNewTask(event.target.value)
    }
    function addTask(){
        if(newTask.trim() !== ''){
            setTasks(t=>[...t,newTask])
            setNewTask('')
        }
    }
    function deleteTask(index){
        setTasks(tasks.filter((_,i)=> i!==index))
    }
    function moveUp(index) {
    if (index > 0) {
        console.log('up', index);
        const updatedTasks = [...tasks];
        const temp = updatedTasks[index - 1];
        updatedTasks[index - 1] = updatedTasks[index];
        updatedTasks[index] = temp;
        setTasks(updatedTasks);
    }
}

function moveDown(index) {
    if (index < tasks.length - 1) {
        console.log('down', index);
        const updatedTasks = [...tasks];
        const temp = updatedTasks[index + 1];
        updatedTasks[index + 1] = updatedTasks[index];
        updatedTasks[index] = temp;
        setTasks(updatedTasks);
    }
}

    return(
        <div className="container">
        <h1>ToDo List</h1>
        <input className='input' type="text" value={newTask} onChange={handleInputChange} placeholder="Add New Task"/>
        <button className="add-button" onClick={addTask}>Add</button>
        <ol className="list">
            {tasks.map((task,index)=>
            <li key={index} className="list-item">
                <div><span className="task">{task}</span></div>
                <div><button className="delete-button btn" onClick={()=>deleteTask(index)}>Delete</button>
                <button className="up-button btn" onClick={()=>moveUp(index)}>Up</button>
                <button className="down-button btn" onClick={()=>moveDown(index)}>Down</button></div>
            </li>)}
        </ol>
        </div>
    )
}
export default TodoList
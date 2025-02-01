import './Header.css';
import React, { useState } from "react";

export default function Header() {
    const [clicked, setClicked] = useState(false); // Show/hide input
    const [task, setTask] = useState(""); // Track input value
    const [taskList, setTaskList] = useState([]); // Store all tasks

    function newtask() {
        setClicked(true);
    }

    function saveTask() {
        if (task.trim() !== "") { 
            setTaskList([...taskList, task]);
            setTask(""); 
            setClicked(false); 
        }
    }

    return (
        <>
            <div className='header-container'>
                <h2 className="Hline">Plan your Day</h2>
                <div>
                    <button className='new-task' onClick={newtask}>Add task</button>
                </div>

                
               
            </div>
            {clicked && (
                    <div>
                        <input 
                            className="add-task" 
                            type="text" 
                            value={task} 
                            onChange={(e) => setTask(e.target.value)} 
                        />
                        <button onClick={saveTask}>Save Task</button>
                    </div>
                )}

                
                <ul>
                    {taskList.map((t, index) => (
                        <li key={index}>{t}</li>
                    ))}
                </ul>
        </>
    );
}

import React, {useState} from "react";
import styles from "./add_task.module.css"


function AddTasks({ onAdd } ){ 

    const [taskName, setTaskName] = useState('');

    

    const handleAddTask = () => {
        if (taskName) {

          onAdd(taskName);

          setTaskName('');
        }

    };



    return ( 
        <div className={styles['div-input-add-task']}> 

            <input type="text" className={styles['input-tarefas']} value={taskName} onChange={(e) => setTaskName(e.target.value)} placeholder="Enter your tasks here..."/>
            
            <button type="button" className={styles['input-tarefas-btn']} onClick={handleAddTask}>Add Tasks</button> 

            {/* usar button ao invés de inp-btn */}

        </div>
    );
}



export default AddTasks
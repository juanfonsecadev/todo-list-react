import React from "react";
import styles from "./add_task.module.css"


function AddTasks(){ 
    return ( 
        <div className={styles['div-input-add-task']}> 

            <input type="text" className={styles['input-tarefas']}  placeholder="Adicione suas tarefas aqui..."/>
            
            <input type="button" className={styles['input-tarefas-btn']} value="Add Tasks" />

            {/* usar button ao invés de inp-btn */}

        </div>
    );
}

export default AddTasks
import React, {useState} from "react";
import styles from "./add_task.module.css"


function AddTasks(){ 

    
    const [valor, setValor] = useState('');
    
    const handleChange = (event) => { 

        setValor(event.target.value);

    }
    
    const clique = () => { 
        alert(` o valor é: ${valor}`);
    };


    return ( 
        <div className={styles['div-input-add-task']}> 

            <input type="text" className={styles['input-tarefas']} value={valor} onChange={handleChange} placeholder="Enter your tasks here..."/>
            
            <button type="button" className={styles['input-tarefas-btn']} onClick={clique}>Add Tasks</button> 

            {/* usar button ao invés de inp-btn */}

        </div>
    );
}

export default AddTasks
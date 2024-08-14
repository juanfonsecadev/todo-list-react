import React , { useState } from "react";
import AddTasks from "./components/add_task.js";
import styles from './taskboard.module.css';
import ActiveTasks from './components/active_tasks.js'


function Container(){  //mudar esse nome


    const [tasks, setTasks] = useState([])

    const addTask = (taskName) => { 
        setTasks([...tasks, taskName])
    }


    return(

        <div className={styles.Container}>

            <h1>Get Things Done!</h1>

            {/* internacionalização */}

            <AddTasks onAdd={addTask} /> 

            < ActiveTasks lista={tasks} />               {/*aqui estou passando as props */ }

            {/* Array de string */}

            {/* manter o padrão de nomes (en/pt) */}
         
        </div>

    );
}

export default Container
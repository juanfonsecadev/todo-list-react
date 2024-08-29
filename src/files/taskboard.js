import React , { useState } from "react";
import AddTasks from "./components/add_task.js";
import styles from './taskboard.module.css';
import ActiveTasks from './components/active_tasks.js'
import { v4 as uuidv4 } from 'uuid';

function Container(){  //mudar esse nome //TODO


    const [tasks, setTasks] = useState([])              //aqui, meu usestate recebe um array vazio.

    const addTask = (taskName) => { 
        setTasks([...tasks, {id: uuidv4(), description: taskName}])                  //const addTask incrementa elementos ao array.  //TODO estudar spread
    }

    const removeTask = (id) => { 

        const updatedTasks = tasks.filter((tasks, i) =>  tasks.id != id);        //

        setTasks(updatedTasks)              //TODO                       //const removeTask remove um elemento do array.

    }


    return(

        <div className={styles.Container}>

            <h1>Get Things Done!</h1>                    {/* internacionalização */}

            <AddTasks onAdd={addTask} />                  {/* chama props onAdd */}

            < ActiveTasks lista={tasks} onDelete={removeTask} />               {/*aqui estou passando as props */ }

            {/* Array de string */}

            {/* manter o padrão de nomes (en/pt) */}
         
        </div>

    );
}

export default Container
import React, {useState} from "react";
import styles from "../components/active_tasks.module.css"
import TaskItem from "./taskItem"

function ActiveTasks(props){ // recebe uma lista de tarefas, //TODO revisar

    let content 

    if(props.lista != 0 && props.lista.length > 0){

       content = props.lista.map((task, index) => (

       < TaskItem task={task}/> 

    ));

    //    task item pra cada item - 

    } else { 

     content = <p>You don't have any task...</p>

    }


    return ( 
        <div className={styles['tarefas-adicionadas']}>

        {content}
 
            
        </div>
    )
}; 

export default ActiveTasks
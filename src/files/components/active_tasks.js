import React, {useState} from "react";
import styles from "../components/active_tasks.module.css"
import TaskItem from "./taskItem"

function ActiveTasks(props){ // recebe uma lista de tarefas, //TODO revisar

    const onDelete = (id) => {

        props.onDelete(id)

    }

    let content 

    if(props.lista != 0 && props.lista.length > 0){

       content = props.lista.map((task, index) => (     //mapeia cada item da lista para um item de TaskItem.

       < TaskItem task={task}  onDelete={() => onDelete(task.id)} key={task.id}/>     //passa props task para o componente taskItem //TODO pensar nissoooooo

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
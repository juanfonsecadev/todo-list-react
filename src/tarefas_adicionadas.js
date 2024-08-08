import React, {useState} from "react";
import styles from "./tarefas_adicionadas.module.css"
import TaskItem from "./taskItem";

function TarefasAdicionadas(props){ // recebe uma lista de tarefas, TODO revisar

    let conteudo 

    if(props.lista != 0 && props.list.length > 0){

       conteudo = < TaskItem /> 

    //    text item pra cada item - 

    } else { 

     conteudo = <p>Aqui vão as suas tarefas...</p>

    }


    return ( 
        <div className={styles['tarefas-adicionadas']}>

        {conteudo}
 
            
        </div>
    )
}; 

export default TarefasAdicionadas
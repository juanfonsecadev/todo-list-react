import React from "react";
import AddTasks from "./add_task";
import styles from './container.module.css';
import TarefasAdicionadas from './tarefas_adicionadas.js'


function Container(){ 
    return(

        <div className={styles.Container}>
            <h1>Get Things Done!</h1>

            {/* internacionalização */}

            <AddTasks /> 

            < TarefasAdicionadas lista={[ ]}/> 


            {/* Array de string */}

            {/* manter o padrão de nomes (en/pt) */}
         
        </div>

    );
}

export default Container
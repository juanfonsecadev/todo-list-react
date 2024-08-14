import React , { useState } from "react";
import AddTasks from "./components/add_task.js";
import styles from './taskboard.module.css';
import ActiveTasks from './components/active_tasks.js'


function Container(){  //mudar esse nome

    

    return(

        <div className={styles.Container}>

            <h1>Get Things Done!</h1>

            {/* internacionalização */}

            <AddTasks /> 

            < ActiveTasks lista={[]}/>               {/*aqui estou passando as props */ }

            {/* Array de string */}

            {/* manter o padrão de nomes (en/pt) */}
         
        </div>

    );
}

export default Container
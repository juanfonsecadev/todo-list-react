import React, { useState } from 'react';
import styles from './taskItem.module.css'
import { FaEdit, FaTrashAlt } from 'react-icons/fa';


// TODO função de funcionalidade para os botões

function TaskItem() {
    return (
        <div className={styles['div-geral']}>

            <div className={styles['item-todo-list']}>
                <input type="text" value={'variavel01'} readOnly />
                
                <button>
                    <FaEdit />
                </button>

                <button>
                    <FaTrashAlt />
                </button>
            </div>

        </div>
    )
    //TODO trazer na mentoria essa questão principal.
}

export default TaskItem
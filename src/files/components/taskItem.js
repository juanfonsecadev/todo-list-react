import React, { useState } from 'react';
import styles from './taskItem.module.css'
import { FaEdit, FaTrashAlt, FaCheck } from 'react-icons/fa';


// TODO função de funcionalidade para os botões

function TaskItem( {task} ) {
    
    const [value, setValue] = useState(task); //valor do inicial do input
    const [isEditing, setIsEditing] = useState(false); //se dá pra editar ou não

    const toggleEdit = () => {
        setIsEditing(!isEditing); //alterna entre editavel e não editável
    };

    
    const handleChange = (event) => {
        setValue(event.target.value); //pega a mudança no texto do input
    };

    return (
        <div className={styles['div-geral']}>
            <div className={styles['item-todo-list']}>

                <input type="text" value={value} onChange={handleChange} readOnly={!isEditing} />

                <button onClick={toggleEdit}> {/* botão de editar */}
                    
                    {isEditing ? <FaCheck /> : <FaEdit />}
                </button>   

                <button>
                    <FaTrashAlt /> {/* falta logica para botão de exclusão*/}
                </button>
            </div>
        </div>
    );
}

export default TaskItem;
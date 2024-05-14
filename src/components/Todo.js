import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {

  const [isIconVisible, setIsIconVisible] = useState(false);

  const showIcon = () => setIsIconVisible(true);
  const hideIcon = () => setIsIconVisible(false);

  return (
    <div className="Todo" onMouseEnter={showIcon} onMouseLeave={hideIcon}>
      <div className='Todo-Select'>
        <input type='checkbox' />
        <p
          className={`${task.completed ? "completed" : "incompleted"}`}
          onClick={() => toggleComplete(task.id)}
        >
          {task.task}
        </p>
      </div>

      {
        isIconVisible && (
          <div>
            <FontAwesomeIcon className="delete-icon" icon={faXmark} onClick={() => deleteTodo(task.id)} />
          </div>
        )
      }
    </div>
  );
};

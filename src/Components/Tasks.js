import React from 'react'
import Task from './Task'

const Tasks = (props) => {

  return (
    <>
        {props.tasks.map((task) => {
            return <Task key={task.id} task={task} onClick={onDelete}/>
        })}
    </>
  )
}

export default Tasks
import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, toggleComplete, deleteTask, editTask }) => {
    return (
        <div className="task-list">
            {tasks.map((task, index) => (
                <Task
                    key={task.id}
                    task={task}
                    index={index}
                    toggleComplete={toggleComplete}
                    deleteTask={deleteTask}
                    editTask={editTask}
                />
            ))}
        </div>
    );
};

export default TaskList;

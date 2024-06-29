import React from 'react';

const Task = ({ task, index, toggleComplete, deleteTask, editTask }) => {
    return (
        <div className={`task ${task.completed ? "completed" : ""}`}>
            <span className="task-number">{index + 1}.</span> {/* Serial number */}
            <span className="task-title">{task.title}</span>
            <div className="task-actions">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleComplete(task.id)}
                    id={`checkbox-${task.id}`}
                />
                <label htmlFor={`checkbox-${task.id}`} className="checkbox-label">
                    Completed
                </label>
            </div>
            <div className="task-buttons">
                <button className="edit" onClick={() => editTask(task.id)}>Edit</button>
                <button className="delete" onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
        </div>
    );
};

export default Task;



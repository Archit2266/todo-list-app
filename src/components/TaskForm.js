import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, editTaskData }) => {
    const [input, setInput] = useState('');

    useEffect(() => {
        if (editTaskData) {
            setInput(editTaskData.title);
        }
    }, [editTaskData]);

    const handleSubmit = e => {
        e.preventDefault();
        if (!input) return;
        addTask(input);
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a new task"
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            <button className="submit" type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;

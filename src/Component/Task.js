import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask, toggleTask } from './action';

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (isEditing && description.trim()) {
      dispatch(editTask(task.id, description));
    }
    setIsEditing(!isEditing);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => dispatch(toggleTask(task.id))}
      />
      {isEditing ? (
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      ) : (
        <span>{task.description}</span>
      )}
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
};

export default Task;

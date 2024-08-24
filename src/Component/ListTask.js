import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';
import { setFilter } from './action';

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter(task =>
    filter === 'ALL' ? true : filter === 'DONE' ? task.isDone : !task.isDone
  );

  return (
    <div>
      <div>
        <button onClick={() => dispatch(setFilter('ALL'))}>All</button>
        <button onClick={() => dispatch(setFilter('DONE'))}>Done</button>
        <button onClick={() => dispatch(setFilter('NOT_DONE'))}>Not Done</button>
      </div>
      <ul>
        {filteredTasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default ListTask;

import React from 'react';

import styles from './task.scss';

const Task = ({
  task,
  deleteTask,
  onDragStart,
}) => (
  <div
    className={styles.task}
    onDragStart={onDragStart(task)}
    draggable
  >
    <span>{task.text}</span>
    <span onClick={() => deleteTask(task)}>x</span>
  </div>
);

export default Task;

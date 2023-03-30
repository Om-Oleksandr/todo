import React, { useContext } from "react";
import cx from "classnames";
import { Delete, Done, RemoveDone } from "@mui/icons-material";
import { TasksContext } from "../../contexts";
import styles from "./TodoItem.module.scss";
const TodoItem = (props) => {
  const { setIsDone, deleteTask } = useContext(TasksContext);
  const { task } = props;
  const taskStateClasses = cx(styles.task, { [styles.done]: task.isDone });
  const handleDoneState = () => {
    setIsDone(task.id);
  };
  const handleDeleteTask = () => {
    deleteTask(task.id);
  };
  return (
    <>
      <li key={task.id} className={taskStateClasses}>
        <span>{task.body}</span>
        <div className={styles.btn__container}>
          <button onClick={handleDoneState}>{task.isDone ? <RemoveDone /> : <Done />}</button>
          <button onClick={handleDeleteTask}>
            <Delete />
          </button>
        </div>
      </li>
    </>
  );
};

export default TodoItem;

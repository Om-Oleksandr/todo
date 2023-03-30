import React, { useContext } from "react";
import { TasksContext, FilterContext } from "../../contexts";
import TodoItem from "../TodoItem";
const TodoList = () => {
  const { tasks } = useContext(TasksContext);
  const { selectedOption } = useContext(FilterContext);
  const renderTodoItems = (task) => {
    if (selectedOption.value === "done" && task.isDone) {
      return <TodoItem key={task.id} task={task} />;
    }
    if (selectedOption.value === "undone" && task.isDone === false) {
      return <TodoItem key={task.id} task={task} />;
    }
    if (selectedOption.value === "any") {
      return <TodoItem key={task.id} task={task} />;
    }
  };
  return (
    <section>
      <div>
        <ul>{tasks.map(renderTodoItems)}</ul>
      </div>
    </section>
  );
};

export default TodoList;

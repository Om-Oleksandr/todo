import React from "react";
import TodoList from "../TodoList";
import { FilterContext, TasksContext } from "../../contexts";
import AddForm from "../AddForm";
import useTodo from "../../hooks/useTodo";
import FilterList from "../FilterList";
import styles from "./Todo.module.scss";
const Todo = () => {
  const { tasks, addTask, setIsDone, deleteTask, filterTasks, selectedOption,setSelectedOption } = useTodo([
    {
      id: Date.now(),
      body: "add your tasks",
      isDone: false,
    },
  ]);
  return (
    <div className={styles.container}>
      <TasksContext.Provider value={{ tasks, addTask, setIsDone, deleteTask }}>
        <FilterContext.Provider value={{ selectedOption, setSelectedOption }}>
          <AddForm />
          <FilterList />
          <TodoList />
        </FilterContext.Provider>
      </TasksContext.Provider>
    </div>
  );
};

export default Todo;

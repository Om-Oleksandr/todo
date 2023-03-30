import { useState } from "react";

const useTodo = (initialValues) => {
  const [tasks, setTasks] = useState([...initialValues]);
  const [filter, setFilter] = useState("Any");
  const [selectedOption, setSelectedOption] = useState({ value: "any", label: "Any" });
  const addTask = (values, formikBag) => {
    const newTasks = [...tasks];
    const existingTasks = newTasks.some((task) => task.body === values.body);

    if (values.body !== "" && existingTasks === false) {
      newTasks.push({
        id: Date.now(),
        body: values.body,
        isDone: false,
      });
    }
    formikBag.resetForm();
    setTasks(newTasks);
  };

  const setIsDone = (id) => {
    tasks.map((task, index) => {
      const newTasks = [...tasks];
      if (task.id === id) {
        newTasks[index].isDone = !newTasks[index].isDone;
      }
      return setTasks(newTasks);
    });
  };
  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const filterTasks = () => {
    console.log("defaultValue");
    // setSelectedOption(value);
  };

  return { tasks, addTask, setIsDone, deleteTask, filterTasks, filter, setFilter, selectedOption, setSelectedOption };
};

export default useTodo;

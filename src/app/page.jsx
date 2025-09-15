"use client";
import { useState } from "react";
import { Buttons } from "../components/Buttons";

import Todo from "../components/Todo";
export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [checked, setChecked] = useState(false);
  function handleChange(e) {
    setInputValue(e.target.value);
  }
  const addTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([
        ...tasks,
        { id: Date.now(), title: inputValue.trim(), completed: false },
      ]);
      setInputValue("");
    }
  };
  const [filter, setFilter] = useState("all");

  const deleteTasks = (deleteIndex) => {
    const deleteTask = tasks.filter((_, i) => i !== deleteIndex);
    setTasks(deleteTask);
  };



  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className=" flex flex-col w-full h-screen justify-center items-center">
      <Todo
        tasks={tasks}
        setTasks={setTasks}
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleChange={handleChange}
        addTask={addTask}
        deleteTasks={deleteTasks}
        filter={filter}
        setFilter={setFilter}
        checked={checked}
        setChecked={setChecked}
        toggleTask={toggleTask}
      />
    </div>
  );
}

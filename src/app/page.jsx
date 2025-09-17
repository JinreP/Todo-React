"use client";
import { useState } from "react";
import { Buttons } from "../components/Buttons";

import Todo from "../components/Todo";
export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [checked, setChecked] = useState(false);
  const [id, setId] = useState(1);

  function handleChange(e) {
    setInputValue(e.target.value);
  }
  const addTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([
        ...tasks,
        {
          id: id,
          title: inputValue.trim(),
          completed: false,
          favourite: false,
        },
      ]);
      setId(id + 1);
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

  const toggleImportant = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, favourite: !task.favourite } : task
      )
    );
  };
  const visibleTask = tasks.filter((t) => {
    if (filter === "all") return true;
    else if (filter === "active") return t.completed === false;
    else if (filter === "completed") return t.completed === true;
    else if (filter === "favourite") return t.favourite === true;
  });
  const clearCompleted = () => {
    const clear = tasks.filter((task) => !task.completed);
    setTasks(clear);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  const clearAll = () => {
    setTasks([]);
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
        toggleImportant={toggleImportant}
        handleKeyDown={handleKeyDown}
        filter={filter}
        setFilter={setFilter}
        checked={checked}
        clearCompleted={clearCompleted}
        id={id}
        setId={setId}
        clearAll={clearAll}
        visibleTask={visibleTask}
        setChecked={setChecked}
        toggleTask={toggleTask}
      />
    </div>
  );
}

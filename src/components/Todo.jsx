"use client";
import { use, useState } from "react";

export default function Todo(props) {
  const [tasks, setTasks] = useState([""]);
  const [newTask, setNewTask] = useState("");
  function handleInputchange(event) {
    setNewTask(event.target.value);
  }
  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {}

  return (
    <div className="flex w-[377px] h-[290px] flex-col justify-center items-center gap-[20px]  rounded-[12px] pt-24 pb-24 pl-16 pr-16  bg-white shadow-md">
      <h1 className="text-2xl ">To-Do-List</h1>
      <div className="flex gap-[10px]">
        <input
          type="text"
          className="border-1 rounded-[6px] w-[250px] "
          value={newTask}
          placeholder="Add a new task"
          onChange={handleInputchange}
        />

        <button
          className="flex h-[40px] pt-[8px] pb-[8px] pr-[16px] pl-[16px] items-center gap-[10px] rounded-[6px] text-white bg-blue-500"
          onClick={addTask}
        >
          Add
        </button>
      </div>
        {" "}
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button className="deleteBtn" onClick={() => deleteTask(index)}>
                Delete
              </button>
            </li>
          ))}
        </ol>

      <div className="flex justify-center  gap-4 items-center ">
        <button className="w-[45px] h-[32px] text-center rounded-[6px] border-0  text-white bg-blue-500 pt-[4px] pb-[4px] pr-[12px] pl-[12px]">
          All
        </button>
        <button className="w-[80px] h-[32px] text-center rounded-[6px] border-0 text-black bg-gray-100 pt-[4px] pb-[4px] pr-[12px] pl-[12px]">
          Active
        </button>
        <button className="w-[100px] h-[32px] text-center rounded-[6px] border-0 text-black bg-gray-100 pt-[4px] pb-[4px] pr-[12px] pl-[12px]">
          Completed
        </button>
      </div>
      <p className="text-gray-400">No tasks yet. Add one above!</p>
      <div className=" flex gap-2">
        <p className="text-gray-400 ">Powered by</p>
        <a href="" className="text-blue-300">
          Pinecone academy
        </a>
      </div>
    </div>
  );
}

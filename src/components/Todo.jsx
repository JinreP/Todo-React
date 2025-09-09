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
  const [filter, setFilter] = useState("all");

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
          className="flex h-[40px] pt-[8px] pb-[8px] pr-[16px] pl-[16px] items-center gap-[10px] rounded-[6px] text-white bg-blue-500 hover:bg-blue-300 hover:text-white"
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
              <button className="bg-red-100 text-red-600 font-medium px-4 py-2 rounded-lg hover:bg-red-200 transition " onClick={() => deleteTask(index)}>
                Delete
              </button>
            </li>
          ))}
        </ol>

      <div className="flex justify-center  gap-4 items-center ">
      <button
        onClick={() => setFilter("all")}
        className={`w-[60px] h-[32px] rounded text-center 
          ${filter === "all" ? "bg-blue-500 text-white" : "bg-gray-100 text-black"}`}
      >
        All
      </button>

      <button
        onClick={() => setFilter("active")}
        className={`w-[80px] h-[32px] rounded text-center 
          ${filter === "active" ? "bg-blue-500 text-white" : "bg-gray-100 text-black"}`}
      >
        Active
      </button>

      <button
        onClick={() => setFilter("completed")}
        className={`w-[100px] h-[32px] rounded text-center 
          ${filter === "completed" ? "bg-blue-500 text-white" : "bg-gray-100 text-black"}`}
      >
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

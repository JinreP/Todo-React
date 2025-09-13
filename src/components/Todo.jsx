"use client";
import { use, useState } from "react";

export default function Todo(props) {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputvalue] = useState("");
  function handleChange(e) {
    setInputvalue(e.target.value);
  }
  const addTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]);
      setInputvalue("");
    }
  };
  const [filter, setFilter] = useState("all");

  const deleteTasks = (deleteIndex) => {
    const deleteTask = tasks.filter((_, i) => i !== deleteIndex);
    setTasks(deleteTask);
  };
  return (
    <div className="flex w-[377px]  max-h-[290px] flex-col justify-center items-center gap-[20px]  rounded-[12px]  bg-white shadow-md">
      <h1 className="text-2xl ">To-Do-List</h1>
      <div className="flex gap-[10px]">
        <input
          type="text"
          className="border-1 rounded-[6px]  w-[250px] "
          placeholder="Add a new task"
          value={inputValue}
          onChange={handleChange}
        />

        <button
          className="flex h-[40px] pt-[8px] pb-[8px] pr-[16px] pl-[16px] items-center gap-[10px] rounded-[6px] text-white bg-blue-500 hover:bg-blue-300 hover:text-white"
          onClick={addTask}
        >
          Add
        </button>
      </div>{" "}
      <ol className="flex flex-col gap-2">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex gap-2 w-[310px]  py-2 px-3 items-center justify-between bg-gray-200 rounded-2xl b"
          >
            <span className="text-base">{task}</span>
            <button
              className="bg-red-50 text-red-500 px-3 py-1.5 rounded-[10px] active:bg-red-200 hover:bg-red-100"
              onClick={() => deleteTasks(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ol>
      <div className="flex justify-center gap-4 items-center ">
        <button
          onClick={() => setFilter("all")}
          className={`w-[60px] h-[32px] rounded text-center
         ${
           filter === "all"
             ? "bg-blue-500 active:bg-blue-400 hover:bg-blue-400    text-white"
             : "bg-gray-200 text-black active:bg-blue-400 hover:bg-gray-100   "
         }
          `}
        >
          All
        </button>

        <button
          className={`w-[80px] h-[32px] rounded text-center]  ${
            filter === "active"
              ? "bg-blue-500 active:bg-blue-400 hover:bg-blue-400    text-white"
              : "bg-gray-200 text-black active:bg-blue-400 hover:bg-gray-100   "
          }`}
          onClick={() => setFilter("active")}
        >
          Active
        </button>

        <button
          onClick={() => setFilter("completed")}
          className={`w-[100px] h-[32px] rounded text-center ${
            filter === "completed"
              ? "bg-blue-500 active:bg-blue-400 hover:bg-blue-400    text-white"
              : "bg-gray-200 text-black active:bg-blue-400 hover:bg-gray-100   "
          }
         `}
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

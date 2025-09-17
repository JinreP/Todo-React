"use client";
import { use, useState } from "react";
import { Buttons } from "./Buttons";

export default function Todo(props) {
  const {
    tasks,
    inputValue,
    handleChange,
    addTask,
    deleteTasks,
    filter,
    toggleImportant,
    setFilter,
    visibleTask,
    clearAll,
    handleKeyDown,
    clearCompleted,
    toggleTask,
  } = props;
  return (
    <div className="flex w-[377px]  h-fit flex-col justify-center items-center gap-[20px]  rounded-[12px]  bg-black">
      <h1 className="text-4xl text-red-500 ">To-Do-List</h1>
      <div className="flex gap-[10px]">
        <input
          type="text"
          className="w-[250px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-500 text-red-500 placeholder-gray-500 "
          placeholder="Add a new task"
          value={inputValue}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
        />
        <button
          className="flex h-[40px] pt-[8px] pb-[8px] pr-[16px] pl-[16px] items-center gap-[10px] rounded-[6px] text-white bg-blue-500 hover:bg-blue-300 hover:text-white"
          onClick={addTask}
        >
          Add
        </button>
      </div>{" "}
      <Buttons
        filter={filter}
        setFilter={setFilter}
        visibleTask={visibleTask}
        toggleImportant={toggleImportant}
      />
      <ol className="flex flex-col gap-2">
        {visibleTask.map((task, i) => (
          <li
            key={task.id}
            className="flex gap-2 relative w-[345px]  py-2 px-3 items-center justify-between bg-gray-200 rounded-[5px] b"
          >
            <input
              type="checkbox"
              className="w-[50px] absolute left-2 h-[20px]"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span
              className={`pl-9 text-2xl ${
                task.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {task.title}
            </span>{" "}
            <input
              type="button"
              value={"☢︎"}
              onClick={() => {
                toggleImportant(task.id);
              }}
              className={`w-[20px] absolute right-24 h-[20px] cursor-pointer
                  ${task.favourite === false ? "" : "text-[red]"}
                `}
            />
            <button
              className="bg-red-50 text-red-500 px-3 py-1.5 rounded-[10px] active:bg-red-200 hover:bg-red-100"
              onClick={() => deleteTasks(i)}
            >
              Delete
            </button>
          </li>
        ))}
      </ol>
      {(tasks.length === 0 && (
        <div>
          {" "}
          <p className="text-gray-500 text-center">
            No tasks yet. Add one above!
          </p>
          <img
            src="https://pbs.twimg.com/media/EKD7G7_WsAA3fqQ.jpg"
            alt="Gintama hamaraa uhav"
            className="w-[400px] h-[200px]"
          />
        </div>
      )) ||
        (tasks.length !== 0 && (
          <div className="flex gap-10">
            {" "}
            <p className="text-red-500">
              {" "}
              {tasks.filter((t) => t.completed).length} of {tasks.length} tasks
              completed
            </p>
            <button
              onClick={clearCompleted}
              className="text-red-500 pl-0 cursor-pointer active:text-red-300 "
            >
              Clear completed
            </button>
          </div>
        ))}
      {tasks.length !== 0 && (
        <div className="flex gap-4">
          <p className="text-red-500">
            {" "}
            {tasks.filter((t) => t.favourite).length} of {tasks.length}{" "}
            favourites chosen
          </p>
          <button
            onClick={clearAll}
            className="text-red-500 pl-0 cursor-pointer active:text-red-300 "
          >
            Clear all
          </button>{" "}
        </div>
      )}
      {tasks.length !== 0 && (
        <div className="flex flex-col mb-3">
          {" "}
          <a
            href="https://www.youtube.com/watch?v=Ct6BUPvE2sM&list=RDCt6BUPvE2sM&start_radio=1"
            target="_blank"
            className="text-center text-4xl text-green-500"
          >
            You can do this!
          </a>
          <img
            src="https://static0.cbrimages.com/wordpress/wp-content/uploads/2019/11/Anime-Funny-Deku.jpg"
            alt="midoriya chmg demjij bn"
            className="w-[400px] h-[180px]"
          />
        </div>
      )}
      <div className=" flex gap-2">
        <a
          href="https://www.youtube.com/watch?v=NjD0H4eBfng&list=RDNjD0H4eBfng&start_radio=1"
          target="_blank"
          className="text-gray-400 "
        >
          Powered by
        </a>
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          className="text-blue-300"
        >
          Pinecone academy
        </a>
      </div>
    </div>
  );
}

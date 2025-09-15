"use client";
import { use, useState } from "react";
import { Buttons } from "./Buttons";
export default function Todo(props) {
  const {
    tasks,
    setTasks,
    inputValue,
    setInputValue,
    handleChange,
    addTask,
    deleteTasks,
    filter,
    setFilter,
    setIsVisible,
    isVisible,
  } = props;
  return (
    <div className="flex w-[377px]  h-fit flex-col justify-center items-center gap-[20px]  rounded-[12px]  bg-white shadow-md">
      <h1 className="text-2xl ">To-Do-List</h1>
      <div className="flex gap-[10px]">
        <input
          type="text"
          className="w-[250px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-gray-800 placeholder-gray-400 "
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
      <Buttons filter={filter} setFilter={setFilter} />
      <ol className="flex flex-col gap-2">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex gap-2 relative w-[310px]  py-2 px-3 items-center justify-between bg-gray-200 rounded-2xl b"
          >
            <svg
              className="absolute left-2"
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <g filter="url(#filter0_d_29_655)">
                <rect
                  x="3"
                  y="3"
                  width="20"
                  height="20"
                  rx="2"
                  fill="#0275FF"
                />
                <rect
                  x="2.5"
                  y="2.5"
                  width="21"
                  height="21"
                  rx="2.5"
                  stroke="white"
                />
                <path
                  d="M8 12.5L12 16.5L19.5 7"
                  stroke="white"
                  strokeWidth="3"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_29_655"
                  x="0"
                  y="0"
                  width="26"
                  height="26"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="2"
                    operator="dilate"
                    in="SourceAlpha"
                    result="effect1_dropShadow_29_655"
                  />
                  <feOffset />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.00392157 0 0 0 0 0.372549 0 0 0 0 0.8 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_29_655"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_29_655"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <span className="pl-7">{task}</span>
            <button
              className="bg-red-50 text-red-500 px-3 py-1.5 rounded-[10px] active:bg-red-200 hover:bg-red-100"
              onClick={() => deleteTasks(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ol>
      {!isVisible && (
        <p className="text-gray-500 ">No tasks yet. Add one above!</p>
      )}
      <div className=" flex gap-2">
        <p className="text-gray-400 ">Powered by</p>
        <a href="" className="text-blue-300">
          Pinecone academy
        </a>
      </div>
    </div>
  );
}

"use client"
import {useState} from "react"

import Todo from "../components/Todo";
export default function Home() {

  return (
    <div className="flex justify-center mt-30 h-screen w-full  ">
      <Todo></Todo>
    </div>
  );
}

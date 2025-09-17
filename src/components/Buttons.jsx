export function Buttons(props) {
  const { filter, setFilter, visibleTask, toggleImportant } = props;
  return (
    <div className="flex justify-center gap-3 items-center ">
      <button
        onClick={() => {
          setFilter("all");
          visibleTask;
        }}
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
      {/* <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
        className={`w-[100px] h-[32px] rounded text-center ${
          filter === "important"
            ? "bg-blue-500 active:bg-blue-400 hover:bg-blue-400    text-white"
            : "bg-gray-200 text-black active:bg-blue-400 hover:bg-gray-100   "
        }
     `}
      >
        Click here
      </a> */}

      <button
        onClick={() => setFilter("favourite")}
        className={`w-[100px] h-[32px] rounded text-center ${
          filter === "favourite"
            ? "bg-blue-500 active:bg-blue-400 hover:bg-blue-400    text-white"
            : "bg-gray-200 text-black active:bg-blue-400 hover:bg-gray-100   "
        }
     `}
      >
        Favourite
      </button>
    </div>
  );
}

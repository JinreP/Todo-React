export function Buttons(props) {
    const {filter, setFilter, visibleTask} = props
  return (
    <div className="flex justify-center gap-4 items-center ">
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
    </div>
  );
}

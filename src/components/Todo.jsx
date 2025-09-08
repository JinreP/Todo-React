export function Todo(props) {
  return (
    <div className="flex w-[377px] flex-col justify-center items-center gap-[40px] pt-24 pb-24 pl-16 pr-16 ">
      <h1>To-Do-List</h1>
      <div className="flex gap-[6px]">
        <button className="flex h-[40px] pt-[8px] pb-[8px] pr-[16px] pl-[16px] items-center gap-[10px] rounded-[6px] bg-blue-500">
          Add
        </button>
      </div>
      <input type="Add a new task..." />
    </div>
  );
}

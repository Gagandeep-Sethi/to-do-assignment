import React from "react";
import FilterBar from "./FilterBar";
import { IoReorderThree } from "react-icons/io5";
const TaskContainer = () => {
  return (
    <div className="w-full h-full  flex flex-col  ">
      <div>
        <FilterBar />
      </div>
      {/* task list container */}
      <div className="w-full h-full flex flex-grow gap-4 px-4 text-neutral-500">
        {/* to do list container */}
        <div className=" flex-grow text-[20px] rounded-xl w-64 h-full flex justify-between p-3  bg-white">
          To do <IoReorderThree className="w-7 h-7" />
        </div>
        {/* in progress list container */}
        <div className=" flex-grow w-64 h-full rounded-xl flex justify-between p-3 text-[20px]  bg-white">
          {" "}
          In progress <IoReorderThree className="w-7 h-7" />
        </div>
        {/* under review list container */}
        <div className=" flex-grow w-64 h-full rounded-xl flex justify-between p-3 text-[20px]  bg-white">
          Under review <IoReorderThree className="w-7 h-7" />
        </div>
        {/* finished list container */}
        <div className=" flex-grow w-64 h-full rounded-xl flex justify-between p-3 text-[20px]  bg-white">
          Finished <IoReorderThree className="w-7 h-7" />
        </div>
      </div>
    </div>
  );
};

export default TaskContainer;

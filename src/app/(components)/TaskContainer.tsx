import React from "react";
import FilterBar from "./FilterBar";
import { IoReorderThree } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import TaskCard from "./TaskCard";
const TaskContainer = () => {
  return (
    <div className="w-full h-full  flex flex-col  ">
      <div>
        <FilterBar />
      </div>
      {/* task list container */}
      <div className="w-full h-full flex flex-grow gap-4 px-2 text-neutral-500">
        {/* to do list container */}

        <div className=" flex-grow text-[20px] rounded-xl w-64 h-full  p-3  bg-white">
          <div className="flex justify-between mb-2">
            To do <IoReorderThree className="w-7 h-7" />
          </div>
          <TaskCard />
          <p className="flex cursor-pointer items-center text-[16px] my-4  justify-between px-2 bg-gradient-to-b rounded-2xl text-white from-neutral-800 to-neutral-950 py-3  ">
            Add new <FiPlus />
          </p>
        </div>

        {/* in progress list container */}
        <div className=" flex-grow w-64 h-full  rounded-xl  p-3 text-[20px]  bg-white">
          <div className="flex justify-between mb-2">
            In progress <IoReorderThree className="w-7 h-7" />
          </div>
          <div className="h-[480px] overflow-y-scroll space-y-6">
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <p className="flex cursor-pointer items-center text-[16px] my-4  justify-between px-2 bg-gradient-to-b rounded-2xl text-white from-neutral-800 to-neutral-950 py-3  ">
              Add new <FiPlus />
            </p>
          </div>
        </div>
        {/* under review list container */}
        <div className=" flex-grow w-64 h-full rounded-xl  p-3 text-[20px]  bg-white">
          <div className="flex justify-between mb-2">
            Under review <IoReorderThree className="w-7 h-7" />
          </div>
          <TaskCard />
          <p className="flex cursor-pointer items-center text-[16px] my-4  justify-between px-2 bg-gradient-to-b rounded-2xl text-white from-neutral-800 to-neutral-950 py-3  ">
            Add new <FiPlus />
          </p>
        </div>
        {/* finished list container */}
        <div className=" flex-grow w-64 h-full rounded-xl p-3 text-[20px]  bg-white">
          <div className="flex justify-between mb-2">
            Finished <IoReorderThree className="w-7 h-7" />
          </div>
          <TaskCard />
          <p className="flex cursor-pointer items-center text-[16px] my-4  justify-between px-2 bg-gradient-to-b rounded-2xl text-white from-neutral-800 to-neutral-950 py-3  ">
            Add new <FiPlus />
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskContainer;

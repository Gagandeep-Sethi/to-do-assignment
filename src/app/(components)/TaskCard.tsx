import React from "react";
import { CiClock2 } from "react-icons/ci";
const TaskCard = () => {
  return (
    <div className="w-64 gap-3 border rounded-xl p-4 bg-neutral-100 border-stone-300">
      {/* title */}
      <p className="w-full text-neutral-500 text-[16px]">
        Implement User Authentication
      </p>
      {/* description */}
      <p className="w-full text-neutral-400 text-sm">
        Develop and integrate user authentication using email and password.
      </p>
      <p className="px-3 py-2 rounded-2xl bg-red-400 text-white text-xs w-16 my-3 text-center">
        Urgent
      </p>
      <p className="flex gap-3 text-sm items-center text-neutral-600 font-semibold my-3">
        <CiClock2 className="w-6 h-6 " />
        2024-08-15
      </p>
    </div>
  );
};

export default TaskCard;

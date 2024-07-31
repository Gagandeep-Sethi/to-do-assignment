import React from "react";
import Greetings from "./Greetings";
import TaskContainer from "./TaskContainer";

const MainContainer = () => {
  return (
    <div className="flex flex-col w-full h-full bg-neutral-100">
      <div className="w-full ">
        <Greetings />
      </div>
      <div className="flex-grow w-full h-full">
        <TaskContainer />
      </div>
    </div>
  );
};

export default MainContainer;

"use client";
import React from "react";
import Sidebar from "../(components)/Sidebar";
import MainContainer from "../(components)/MainContainer";

const Page: React.FC = () => {
  return (
    <div className="flex">
      <div className="w-64 h-screen">
        <Sidebar />
      </div>

      <div className="flex-1 ">
        <MainContainer />
      </div>
    </div>
  );
};

export default Page;

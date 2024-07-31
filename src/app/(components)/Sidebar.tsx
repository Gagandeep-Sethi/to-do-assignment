import Image from "next/image";
import React from "react";
import { GoGraph } from "react-icons/go";
import { HiOutlineUsers } from "react-icons/hi2";
import { BiHomeAlt2 } from "react-icons/bi";
import { HiOutlineClipboardList } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="w-full h-full bg-red-20 p-4 space-y-6 relative border-r border-stone-300">
      <div className="flex justify-cente gap-4 items-center">
        <div className="avatar">
          <div className="w-10 rounded-full">
            <Image src="/profile.jpg" alt="" width={20} height={20} />
          </div>
        </div>
        <p>Gagandeep Sethi</p>
      </div>
      <div className="flex justify-center">
        <button className="btn btn-sm">Logout</button>
      </div>
      <ul className="space-y-4 text-neutral-500">
        <li className="flex items-center gap-3 text-xl bg-zinc-300  hover:bg-zinc-300 p-2 transition-all duration-200 rounded-2xl">
          <BiHomeAlt2 />
          Home
        </li>
        <li className="flex items-center gap-3 text-xl hover:bg-zinc-300 p-2 transition-all duration-200 rounded-2xl">
          <HiOutlineClipboardList />
          Boards
        </li>
        <li className="flex items-center gap-3 text-xl hover:bg-zinc-300 p-2 transition-all duration-200 rounded-2xl">
          <IoSettingsOutline />
          Settings
        </li>
        <li className="flex items-center gap-3 text-xl hover:bg-zinc-300 p-2 transition-all duration-200 rounded-2xl">
          <HiOutlineUsers />
          Teams
        </li>
        <li className="flex items-center gap-3 text-xl hover:bg-zinc-300 p-2 transition-all duration-200 rounded-2xl">
          <GoGraph />
          Analytics
        </li>
      </ul>
      <p className="flex gap-2 justify-center cursor-pointer text-center  p-4 bg-gradient-to-b from-indigo-700 to bg-indigo-950 text-white rounded-xl">
        Create new task <IoIosAddCircle className="w-6 h-6 text-white" />
      </p>
      <div className="absolute bottom-4 text-neutral-500">
        <p className="flex items-center gap-3 text-xl font-extralight">
          <MdOutlineFileDownload className="h-7 w-7" />
          Download the app
        </p>
      </div>
    </div>
  );
};

export default Sidebar;

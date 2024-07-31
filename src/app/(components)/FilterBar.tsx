"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { BsStars } from "react-icons/bs";
import { LuFilter } from "react-icons/lu";
import { FiShare2 } from "react-icons/fi";
import { IoIosAddCircle } from "react-icons/io";
const FilterBar = () => {
  const [search, SetSearch] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetSearch(e.target.value);
  };
  return (
    <div className="px-4 pb-4 flex justify-between">
      <div className="relative w-48 ">
        <div className="absolute right-2 top-2 bg-white">
          <CiSearch className="w-6 h-6 text-neutral-400" />
        </div>
        <input
          className="bg-white border border-stone-300 w-48 px-3 py-2 rounded-lg placeholder:text-neutral-400"
          required
          name="search"
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleChange}
        />
      </div>
      <div className="flex gap-6">
        <ul className="flex items-center gap-6 text-[16px] text-neutral-500">
          <li className="flex gap-3 items-center">
            Calendar view <CiCalendar className="w-6 h-6" />
          </li>
          <li className="flex gap-3 items-center">
            Automation
            <BsStars className="w-6 h-6" />
          </li>
          <li className="flex gap-3 items-center">
            Filter <LuFilter className="w-6 h-6" />
          </li>
          <li className="flex gap-3 items-center">
            Share
            <FiShare2 className="w-6 h-6" />
          </li>
        </ul>
        <p className="flex gap-2 justify-center cursor-pointer text-center  px-3 py-2 bg-gradient-to-b from-indigo-700 to bg-indigo-950 text-white rounded-xl">
          Create new <IoIosAddCircle className="w-6 h-6 text-white" />
        </p>
      </div>
    </div>
  );
};

export default FilterBar;

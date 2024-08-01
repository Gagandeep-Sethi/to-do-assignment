"use client";
import React, { useState, ChangeEvent } from "react";
import { CiCalendar } from "react-icons/ci";
import { PiWarningDiamondLight, PiSpinnerBold } from "react-icons/pi";
import { GoPencil } from "react-icons/go";
const CreateTask = () => {
  const [formValue, setFormValue] = useState({
    title: "",
    description: "",
    status: "To do",
    priority: "None",
    deadline: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;

    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
  };

  return (
    <div className="bg-stone-500 h-screen flex justify-center">
      <div className="w-[500px] h-[700px] bg-green-700">
        <form className="p-6 space-y-6">
          <div>
            <input
              className="bg-white border-none w-96 px-3 py-2 rounded-lg placeholder:text-neutral-400 text-4xl"
              required
              name="title"
              type="text"
              placeholder="Title"
              value={formValue.title}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center gap-6">
            <label
              htmlFor="status"
              className=" flex gap-4 text-xl font-medium text-neutral-400"
            >
              <PiSpinnerBold className="h-7 w-7" />
              Status
            </label>
            <select
              name="status"
              className="bg-white border-none w-48 px-3 py-2 rounded-lg placeholder:text-neutral-400"
              value={formValue.status}
              onChange={handleChange}
              required
            >
              <option value="To do">To do</option>
              <option value="In progress">In progress</option>
              <option value="Under review">Under review</option>
              <option value="Finished">Finished</option>
            </select>
          </div>
          <div className="flex items-center gap-6">
            <label
              htmlFor="priority"
              className=" flex gap-4 text-xl font-medium text-neutral-400"
            >
              <PiWarningDiamondLight className="w-7 h-7" />
              Priority
            </label>
            <select
              name="priority"
              className="bg-white border-none w-48 px-3 py-2 rounded-lg placeholder:text-neutral-400"
              value={formValue.priority}
              onChange={handleChange}
            >
              <option value="Urgent">Urgent</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div className="flex items-center gap-6">
            <label
              htmlFor="deadline"
              className=" flex gap-4 text-xl font-medium text-neutral-400"
            >
              <CiCalendar className="w-7 h-7" />
              Deadline
            </label>
            <input
              type="date"
              //value={formValue.deadline}
              onChange={handleChange}
              className="px-2 py-1   rounded-lg"
            />
          </div>

          <div className="flex items-center gap-6">
            <label
              htmlFor="description"
              className=" flex gap-4 text-xl font-medium text-neutral-400"
            >
              <GoPencil className="w-7 h-6" />
              Description
            </label>
            <textarea
              className="bg-white border-none  px-3 py-2 rounded-lg placeholder:text-neutral-400 "
              name="description"
              placeholder="not selected"
              value={formValue.description}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="btn ">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;

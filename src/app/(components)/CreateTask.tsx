"use client";
import React, { useState, ChangeEvent } from "react";

const CreateTask = () => {
  const [formValue, setFormValue] = useState({
    title: "",
    description: "",
    status: "To do",
    priority: "",
    deadline: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;

    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
  };

  return (
    <div>
      <form>
        <div>
          <input
            className="bg-white border-none w-48 px-3 py-2 rounded-lg placeholder:text-neutral-400 text-4xl"
            required
            name="title"
            type="text"
            placeholder="Title"
            value={formValue.title}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="status" className="text-sm font-medium">
            Status
          </label>
          <select
            name="status"
            className="bg-white border-none w-48 px-3 py-2 rounded-lg placeholder:text-neutral-400"
            value={formValue.status}
            onChange={handleChange}
          >
            <option value="To do">To do</option>
            <option value="In progress">In progress</option>
            <option value="Under review">Under review</option>
            <option value="Finished">Finished</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;

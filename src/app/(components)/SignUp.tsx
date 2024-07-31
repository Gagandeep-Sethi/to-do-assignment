"use client ";
import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useSignUp } from "../(hooks)/useSignup";

const SignUp = () => {
  const [formValue, setFormValue] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const { signup, isLoading, error } = useSignUp();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    await signup(formValue);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    console.log("name", name);
    console.log("value", value);
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
  };
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-b from-white to-[#6f65b2]">
      <div className="w-[648px] bg-gradient-to-b from-neutral-100 to-stone-100 py-14 rounded-2xl border border-gray-200 ">
        <h1 className="text-center text-5xl font-medium">
          Welcome to <span className="text-[#6f65b2] ">Workflo</span>!
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-y-8 my-8 "
        >
          <div>
            <input
              className="bg-[#EBEBEB] w-[528px] px-4 py-3 rounded-lg placeholder:text-neutral-400"
              required
              name="username"
              type="text"
              placeholder="Fullname"
              value={formValue.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              className="bg-[#EBEBEB] w-[528px] px-4 py-3 rounded-lg placeholder:text-neutral-400"
              required
              name="email"
              type="email"
              placeholder="Your email"
              value={formValue.email}
              onChange={handleChange}
            />
          </div>
          <div className="relative">
            <input
              required
              className="bg-[#EBEBEB] w-[528px] px-4 py-3 rounded-lg placeholder:text-neutral-400"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={formValue.password}
              onChange={handleChange}
            />
            <button
              type="button"
              className="absolute right-2 top-3.5"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <div className="">
                  <FiEye className=" w-7 h-5  text-neutral-400" />
                </div>
              ) : (
                <div className="">
                  <FiEyeOff className=" w-7 h-5  text-neutral-400" />
                </div>
              )}
            </button>
          </div>
          <div>
            <button
              disabled={isLoading}
              className="bg-[#6f65b2] text-white text-lg w-[528px] text-center py-3 rounded-lg "
              type="submit"
            >
              {isLoading ? (
                <span className="loading loading-spinner loading-sm "></span>
              ) : null}
              Sign up
            </button>
          </div>
        </form>
        {error && (
          <p className="text-red-600 mt-3 text-center text-sm  ">{error} !!</p>
        )}
        <p className="text-center text-xl text-neutral-500">
          Already have an account??
          <span className="text-sky-800 cursor-pointer"> Log in.</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

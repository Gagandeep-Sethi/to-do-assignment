//import { addUser } from "@/provider/redux/userSlice";
import { useState } from "react";
//import { useDispatch } from "react-redux";

export const useSignUp = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(Boolean);
  //dispatch(addUser(json));
  //const dispatch = useDispatch();
  const signup = async (formValue: any) => {
    const { password, username, email } = formValue;

    setIsLoading(true);
    setError(null);
    const response = await fetch(`/api/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password, username, email }),
    });
    const json = await response.json();
    console.log(json, "response");

    if (!response.ok) {
      setIsLoading(false);
      setError(json.message);
    }
    if (response.ok) {
      setIsLoading(false);
      console.log("signup Successfull");
      //dispatch(addUser(json));
    }
  };
  return { signup, isLoading, error };
};

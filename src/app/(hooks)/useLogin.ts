//import { addUser } from "@/provider/redux/userSlice";
import { useState } from "react";
//import { useDispatch } from "react-redux";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(Boolean);
  //const dispatch = useDispatch();

  const login = async (formValue: any) => {
    const { password, email } = formValue;

    setIsLoading(true);
    setError(null);
    const response = await fetch(`/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password, email }),
    });
    const json = await response.json();
    console.log(json, "response");

    if (!response.ok) {
      setIsLoading(false);
      setError(json.message);
    }
    if (response.ok) {
      setIsLoading(false);
      console.log("login Successfull");
      //dispatch(addUser(json));
    }
  };
  return { login, isLoading, error };
};

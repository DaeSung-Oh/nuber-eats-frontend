import React from "react";
import { useForm } from "react-hook-form";
import { isLoggedInVar } from "../apllo";

export const LoggedOutRouter = () => {
  const { register, watch, handleSubmit } = useForm();

  const onClick = () => {
    isLoggedInVar(true);
  };

  return (
    <>
      <div className="container flex mx-auto h-screen justify-center items-center">
        <div className="flex flex-col items-center">
          <h1>Logged Out</h1>
          <button
            onClick={onClick}
            className="inline-flex justify-center items-center text-sm text-white bg-indigo-500 hover:bg-indigo-300 transition-colors"
          >
            click to login
          </button>
        </div>
      </div>
    </>
  );
};

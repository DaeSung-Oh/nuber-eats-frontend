import React from "react";
import { isLoggedInVar } from "../apllo";

export const LoggedInRouter = () => {
  const onClick = () => {
    isLoggedInVar(false);
  };

  return (
    <>
      <div className="container flex mx-auto h-screen justify-center items-center">
        <div className="flex flex-col items-center">
          <h1>Logged In</h1>
          <button
            onClick={onClick}
            className="inline-flex justify-center items-center text-sm text-white bg-indigo-500 hover:bg-indigo-300 transition-colors"
          >
            click to logout
          </button>
        </div>
      </div>
    </>
  );
};

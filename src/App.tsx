import React, { useEffect } from "react";
import { useReactiveVar } from "@apollo/client";
import { LoggedOutRouter } from "./routers/logged-out-router";
import { LoggedInRouter } from "./routers/logged-in-router";
import { isLoggedInVar } from "./apllo";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  return (
    <div className="App">
      {isLoggedIn ? <LoggedInRouter /> : <LoggedOutRouter />}
    </div>
  );
}

export default App;

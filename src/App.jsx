import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";
import userContext from "./utils/useContext";

function App() {
  const [userName, setUserName] = useState("shashikant sahu");

  return (
    <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <Header />
      <Outlet />
    </userContext.Provider>
  );
}

export default App;

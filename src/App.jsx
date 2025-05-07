import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";
import userContext from "./utils/useContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  const [userName, setUserName] = useState("shashikant sahu");

  return (
    <Provider store={appStore}>
      <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <Header />
        <Outlet />
      </userContext.Provider>
    </Provider>
  );
}

export default App;

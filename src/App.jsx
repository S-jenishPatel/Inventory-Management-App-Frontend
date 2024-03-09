import { Outlet } from "react-router-dom";
import Menubar from "./Menubar/Menubar";

import "./App.css";

function App() {
  return (
    <>
      <Menubar />
      <Outlet />
    </>
  );
}

export default App;

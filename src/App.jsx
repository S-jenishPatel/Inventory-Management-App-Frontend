import { Outlet } from "react-router-dom";
import Menubar from "./Menubar/Menubar";
import { Toaster } from "react-hot-toast";

import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <Menubar />
        <Outlet />
      </div>
      <Toaster position="top-right" />
    </>
  );
}

export default App;

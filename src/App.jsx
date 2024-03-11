import { Outlet } from "react-router-dom";
import Menubar from "./Menubar/Menubar";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Menubar />
      <Outlet />
    </div>
  );
}

export default App;

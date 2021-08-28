import React from "react";
import Navbar from "./shared/Navbar";
import Sidebar from "./shared/Sidebar";
import HotelView from "./HotelView/HotelView";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <Sidebar />
        <HotelView />
      </div>
    </div>
  );
};

export default App;
